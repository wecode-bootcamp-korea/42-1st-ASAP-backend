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

const getProductsForHands = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.name,
      p.image_url,
      prod_o.options,
      prod_f.feeling_of_use,
      prod_s.scents,
      pfm.formulation
    FROM products p
    INNER JOIN (
      SELECT
        po.product_id,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "size", po.size, 
            "price", po.price
          )
        ) AS options
      FROM product_options po
      INNER JOIN products ON products.id = po.product_id
      GROUP BY po.product_id
    ) prod_o ON p.id=prod_o.product_id
    INNER JOIN (
      SELECT
        pps.product_id,
        JSON_ARRAYAGG(ps.scent) AS scents
      FROM products_product_scents pps
      INNER JOIN product_scents ps ON ps.id=pps.product_scent_id
      GROUP BY product_id
    ) prod_s ON p.id=prod_s.product_id
    INNER JOIN (
      SELECT
        ppf.product_id,
        JSON_ARRAYAGG(pf.name) AS feeling_of_use
      FROM products_product_feelings ppf
      INNER JOIN product_feelings pf ON pf.id=ppf.product_feeling_id
      GROUP BY product_id
    ) prod_f ON p.id=prod_f.product_id
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    WHERE p.sub_category_id=12;
    `
  );
};

const getProductsForBodys = async () => {
  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.name,
      p.image_url,
      prod_o.options,
      prod_f.feeling_of_use,
      prod_s.scents,
      pfm.formulation
    FROM products p
    INNER JOIN (
      SELECT
        po.product_id,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "size", po.size, 
            "price", po.price
          )
        ) AS options
      FROM product_options po
      INNER JOIN products ON products.id = po.product_id
      GROUP BY po.product_id
    ) prod_o ON p.id=prod_o.product_id
    INNER JOIN (
      SELECT
        pps.product_id,
        JSON_ARRAYAGG(ps.scent) AS scents
      FROM products_product_scents pps
      INNER JOIN product_scents ps ON ps.id=pps.product_scent_id
      GROUP BY product_id
    ) prod_s ON p.id=prod_s.product_id
    INNER JOIN (
      SELECT
        ppf.product_id,
        JSON_ARRAYAGG(pf.name) AS feeling_of_use
      FROM products_product_feelings ppf
      INNER JOIN product_feelings pf ON pf.id=ppf.product_feeling_id
      GROUP BY product_id
    ) prod_f ON p.id=prod_f.product_id
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    WHERE p.sub_category_id=13;
    `
  );
};

module.exports = {
  getProducts,
  getProductsForBodyHands,
  getProductsForHands,
  getProductsForBodys,
};
