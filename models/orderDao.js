const mysqlDataSource = require('./dataSource');

const createCart = async (userId, productOptionId, quantity) => {
  await mysqlDataSource.query(
    `
    INSERT INTO carts (
      user_id,
      product_options_id,
      quantity
    )
    VALUES (
      ?,
      ?,
      ?
    );
    `,
    [userId, productOptionId, quantity]
  );
};

const updateCart = async (userId, productOptionId, quantity) => {
  await mysqlDataSource.query(
    `
    UPDATE carts
    SET quantity=?
    WHERE user_id=? AND product_options_id=?;
    `,
    [quantity, userId, productOptionId]
  );
};

const deleteCart = async (userId, productOptionId) => {
  await mysqlDataSource.query(
    `
    DELETE
    FROM carts
    WHERE user_id=? AND product_options_id=?;
    `,
    [userId, productOptionId]
  );
};

const getTotalPrice = async (userId) => {
  await mysqlDataSource.query(
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
    WHERE user_id=?
    GROUP BY user_id;
    `,
    [userId]
  );
};

const createDelivery = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  await mysqlDataSource.query(
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
};

const createOrder = async (userId, deliveryId) => {
  await mysqlDataSource.query(
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
    [userId, deliveryId]
  );
};

const createOrderItem = async (userId, orderId, productId, quantity) => {
//   const [result] = await mysqlDataSource.query(
//     `SELECT
//     c.user_id,
//     c.product_options_id,
//     c.quantity
//   FROM carts c
//   WHERE c.user_id=?;
      

//       `,
//     [userId]
//   );
// };
  await mysqlDataSource.query(
    `
      INSERT INTO order_items (order_id, order_status_id, product_id, quantity) VALUES (?, 1, ?, ?);

      `,
    [orderId, productId, quantity]
  );
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  createDelivery,
  createOrder,
  createOrderItem,
  getTotalPrice,
};
