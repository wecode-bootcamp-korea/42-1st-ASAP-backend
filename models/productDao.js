const mysqlDataSource = require('./dataSource');

const getProducts = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
        id,
        name,
        img_url,
        description,
        main_ingredient,
        ingredient,
        sub_category_id,
        product_formulation_id
    FROM
        products;
    `
  );
};

module.exports = {
  getProducts,
};
