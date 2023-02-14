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

const createOrderItem = async (orderId, productId, quantity) => {
  await mysqlDataSource.query(
    `
      INSERT INTO order_items (order_id, order_status_id, product_id, quantity) VALUES (?, 1, ?, ?);

      `,
    [orderId, productId, quantity]
  );
};

module.exports = {
  createCart,
  createDelivery,
  createOrder,
  createOrderItem,
};
