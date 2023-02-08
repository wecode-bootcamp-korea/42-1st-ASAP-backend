const mysqlDataSource = require('./dataSource');

const getProducts = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
        id,
        name,
        image_url,
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

const getProductsForBodyHands = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
      p.sub_category_id,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "name", p.name,
          "image_url", p.image_url,
          "min_price", (SELECT MIN(price) FROM product_options)
        )
      ) AS product_info
      FROM products p, product_options o, sub_categories sc
      INNER JOIN main_categories mc ON sc.main_category_id = mc.id
      WHERE p.id = o.product_id AND p.sub_category_id=sc.id AND sc.main_category_id = 2
      GROUP BY sub_category_id;
      `
  );
};

module.exports = {
  getProducts,
  getProductsForBodyHands,
};
