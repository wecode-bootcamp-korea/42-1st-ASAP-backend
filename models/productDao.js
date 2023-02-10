const mysqlDataSource = require('./dataSource');

const getProductsByMainCategory = async (result) => {
  const whereClause = result;
  return await mysqlDataSource.query(
    `
    SELECT
      p.sub_category_id,
      JSON_ARRAYAGG(produc.prod) AS product_info
    FROM products p
    INNER JOIN(
      SELECT
        pr.id,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            "name", pr.name,
            "image_url", pr.image_url,
            "min_price", (SELECT MIN(price) FROM product_options)
          )
        ) as prod
      FROM products pr
      GROUP BY id
    ) as produc ON p.id=produc.id
    INNER JOIN (
      SELECT
        sc.id,
        sc.name
      FROM sub_categories sc
      ) sub_c ON sub_c.id=p.sub_category_id
    INNER JOIN (
      SELECT
        subc.id,
        mc.name
      FROM sub_categories subc
      INNER JOIN main_categories mc ON mc.id=subc.main_category_id
      ${whereClause}
    ) sub_cat ON sub_cat.id = p.sub_category_id
    GROUP BY sub_category_id;
    `
  );
};

const getProductById = async (result) => {
  const whereClause = result;
  return await mysqlDataSource.query(
    `
    SELECT
        p.id,
        sub_c.name AS sub_category,
        sub_cat.name AS main_category,
        p.name,
        p.image_url,
        p.description,
        prod_f.feeling_of_use,
        prod_s.scents,
        p.main_ingredient,
        p.ingredient,
        prod_o.options,
        prod_g.guides
    FROM products p
    INNER JOIN (
            SELECT
                sc.id,
                sc.name
            FROM sub_categories sc
        ) sub_c ON sub_c.id=p.sub_category_id
    INNER JOIN (
    SELECT
        subc.id,
        mc.name
    FROM sub_categories subc
    INNER JOIN main_categories mc ON mc.id=subc.main_category_id
    ) sub_cat ON sub_cat.id = p.sub_category_id
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
    INNER JOIN (
        SELECT
            pg.product_id,
            JSON_ARRAYAGG(
                    JSON_OBJECT(
                        "image_url", pg.image_url, 
                        "usage_description", pg.usage_description,
                        "usage_amount", pg.usage_amount, 
                        "texture", pg.texture
                    )
                ) AS guides
        FROM product_guides pg
        INNER JOIN products prod ON prod.id=pg.product_id
        GROUP BY product_id
    ) prod_g ON p.id=prod_g.product_id
    ${whereClause};
    `
  );
};

const getProductsForHands = async (result) => {
  const whereClause = result;

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
    ${whereClause} 
    LIMIT 5;
    `
  );
};

const getProductsForBodys = async (result) => {
  const whereClause = result;
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
    ${whereClause} 
    LIMIT 5;
    `
  );
};

const getProductsForMainPage = async () => {
  return await mysqlDataSource.query(
    `
    SELECT     
      p.id,
      p.name,
      p.image_url,
      p.description
    FROM products p
    ORDER BY RAND()
    LIMIT 5;
    `
  );
};

module.exports = {
  getProductsByMainCategory,
  getProductById,
  getProductsForHands,
  getProductsForBodys,
  getProductsForMainPage,
};
