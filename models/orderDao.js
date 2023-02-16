const mysqlDataSource = require('./dataSource');

const orderProcess = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  const queryRunner = mysqlDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `
      INSERT INTO deliveries (
        last_name,
        first_name,
        message,
        country_code,
        phone_number,
        country,
        address,
        user_id
      )
      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      );
    `,
      [
        lastName,
        firstName,
        message,
        countryCode,
        phoneNumber,
        country,
        address,
        userId,
      ]
    );
    const [delivery] = await queryRunner.query(
      `
      SELECT
        id
      FROM deliveries
      WHERE user_id=?;
      `,
      [userId]
    );

    await queryRunner.query(
      `
      INSERT INTO orders (
          user_id,
          delivery_id
      )
      VALUES (
          ?,
          ?
      );
      `,
      [userId, delivery.id]
    );

    const [order] = await queryRunner.query(
      `
      SELECT
        id
      FROM orders
      WHERE user_id=?;
      `,
      [userId]
    );

    const [cart] = await queryRunner.query(
      `
      SELECT
        c.user_id,
        c.product_options_id,
        c.quantity
      FROM carts c
      WHERE c.user_id=?;
      `,
      [userId]
    );

    const productOptionId = cart['product_options_id'];
    const quantity = cart['quantity'];

    await queryRunner.query(
      `
      INSERT INTO order_items (
        order_id,
        order_status_id,
        product_option_id,
        quantity
      )
      VALUES (
        ?,
        1,
        ?,
        ?
      );
      `,
      [order.id, productOptionId, quantity]
    );
    const [price] = await queryRunner.query(
      `
      SELECT
        c.user_id,
        SUM(total_prices.total) AS total_price
      FROM carts c
      INNER JOIN (
        SELECT
          user_id,
          product_options_id,
          quantity,
          po.price,
          po.price*quantity AS total
        FROM carts c
        INNER JOIN (
          SELECT
            id,
            product_id,
            size,
            price
          FROM product_options
        ) po ON c.product_options_id = po.id
      ) AS total_prices
      ON total_prices.user_id=c.user_id
      WHERE c.user_id=?
      GROUP BY user_id;
      `,
      [userId]
    );
    const productPrice = price.total_price;

    const [user] = await queryRunner.query(
      `
      SELECT
        id,
        point
      FROM users
      WHERE id=?
      `,
      [userId]
    );
    const userPoint = user.point;
    const updatedPoint = userPoint - productPrice;

    if (updatedPoint < 0) {
      throw new Error('포인트 부족');
    }

    await queryRunner.query(
      `
      UPDATE users
      SET point = ?
      WHERE id = ?;
    `,
      [updatedPoint, userId]
    );

    await queryRunner.query(
      `
      DELETE
      FROM carts
      WHERE user_id=?
      `,
      [userId, productOptionId]
    );

    await queryRunner.commitTransaction();
    await queryRunner.release();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    await queryRunner.release();

    throw new Error('FAILED TO CREATE ORDER');
  }
};

module.exports = {
  getTotalPrice,
  orderProcess,
};
