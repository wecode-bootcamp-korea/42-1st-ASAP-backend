const mysqlDataSource = require('./dataSource');

const createProduct = async (
  name,
  img_url,
  description,
  size,
  feeling,
  formulation,
  main_ingredient,
  ingredient,
  price
) => {
  return await mysqlDataSource.query(
    `
    INSERT INTO products (
      name,
      img_url,
      description,
      size,
      feeling,
      formulation,
      main_ingredient,
      ingredient,
      price
    )
    VALUES (
      ?,
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
      name,
      img_url,
      description,
      size,
      feeling,
      formulation,
      main_ingredient,
      ingredient,
      price,
    ]
  );
};

const getProducts = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
      id,
      name,
      img_url,
      description,
      size,
      feeling,
      formulation,
      main_ingredient,
      ingredient,
      price
    FROM
      products;
    `
  );
};

module.exports = {
  createProduct,
  getProducts,
};
