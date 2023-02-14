const appDataSource = require('./dataSource');

const createCart = async (userId, productId, quantity) => {
  await mysqlDataSource.query(
    `
    INSERT INTO carts (
      user_id,
      product_id,
      quantity
    )
    VALUES (
      ?,
      ?,
      ?
    );
    `,
    [userId, productId, quantity]
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
​
module.exports = {
  createCart,
  createDelivery,
};

