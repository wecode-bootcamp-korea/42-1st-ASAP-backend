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

const getCart = async (userId) => {
  const result = await mysqlDataSource.query(
    `
    SELECT
    po.id,
    JSON_ARRAYAGG(JSON_OBJECT(
    "size", po.size,
    "price", po.price,
    "name", prod.name,
    "image_url", prod.image_url,
    "quantity", cart.total_quantity,
    "sub_price", cart.total_quantity * po.price)) AS info
  FROM product_options po
  INNER JOIN (
    SELECT
      p.id,
      p.name,
      p.image_url
    FROM products p
  ) prod ON prod.id=po.product_id
  INNER JOIN (
    SELECT
      c.product_options_id,
      c.user_id,
      SUM(c.quantity) as total_quantity
    FROM carts c
    GROUP BY c.product_options_id, user_id
  ) cart ON cart.product_options_id = po.id
  WHERE user_id = ?
  GROUP BY po.id;
    `,
    [userId]
  );
  return result;
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
};
