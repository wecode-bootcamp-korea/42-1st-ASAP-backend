const mysqlDataSource = require('./dataSource');
const QueryBuilder = require('./productListQuery');

const getProducts = async (limit) => {
  const queryBuilder = new QueryBuilder(
    (mainCategoryId = undefined),
    (subCategoryId = undefined),
    (formulation = undefined),
    (scent = undefined),
    limit
  );
  const query = queryBuilder.buildQuery();
  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.sub_category_id,
      sub_c.name AS sub_category,
      sub_cat.main_category_id AS main_category_id,
      sub_cat.name AS main_category,
      p.name,
      p.image_url,
      p.description,
      prod_f.feeling_of_use,
      prod_s.scents,
      p.main_ingredient,
      p.ingredient,
      prod_o.options,
      prod_g.guides,
      pfm.formulation
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
        subc.main_category_id,
        mc.name
    FROM sub_categories subc
    INNER JOIN main_categories mc ON mc.id=subc.main_category_id
    ) sub_cat ON sub_cat.id = p.sub_category_id
    INNER JOIN (
        SELECT
            po.product_id,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    "product_option_id", po.id,
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
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    ${query};
    `
  );
};

const getProductsByMainCategory = async (mainCategoryId, limit) => {
  const queryBuilder = new QueryBuilder(
    mainCategoryId,
    (subCategoryId = undefined),
    (formulation = undefined),
    (scent = undefined),
    limit
  );
  const query = queryBuilder.buildQuery();

  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.sub_category_id,
      sub_c.name AS sub_category,
      sub_cat.main_category_id AS main_category_id,
      sub_cat.name AS main_category,
      p.name,
      p.image_url,
      p.description,
      prod_f.feeling_of_use,
      prod_s.scents,
      p.main_ingredient,
      p.ingredient,
      prod_o.options,
      prod_g.guides,
      pfm.formulation
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
        subc.main_category_id,
        mc.name
    FROM sub_categories subc
    INNER JOIN main_categories mc ON mc.id=subc.main_category_id
    ) sub_cat ON sub_cat.id = p.sub_category_id
    INNER JOIN (
        SELECT
            po.product_id,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    "product_option_id", po.id,
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
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    ${query};
    `
  );
};

const getProductsBySubCategory = async (
  mainCategoryId,
  subCategoryId,
  formulation,
  scent,
  limit
) => {
  // console.log(scent);
  const queryBuilder = new QueryBuilder(
    mainCategoryId,
    subCategoryId,
    formulation,
    scent,
    limit
  );

  const query = queryBuilder.buildQuery();
  // console.log(query);

  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.sub_category_id,
      sub_c.name AS sub_category,
      sub_cat.main_category_id AS main_category_id,
      sub_cat.name AS main_category,
      p.name,
      p.image_url,
      p.description,
      prod_f.feeling_of_use,
      prod_s.scents,
      p.main_ingredient,
      p.ingredient,
      prod_o.options,
      prod_g.guides,
      pfm.formulation 
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
        subc.main_category_id,
        mc.name
    FROM sub_categories subc
    INNER JOIN main_categories mc ON mc.id=subc.main_category_id
    ) sub_cat ON sub_cat.id = p.sub_category_id
    INNER JOIN (
        SELECT
            po.product_id,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    "product_option_id", po.id,
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
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    ${query};
    `
  );
};

const getProductById = async (productId) => {
  return await mysqlDataSource.query(
    `
    SELECT
      p.id,
      p.sub_category_id,
      sub_c.name AS sub_category,
      sub_cat.main_category_id AS main_category_id,
      sub_cat.name AS main_category,
      p.name,
      p.image_url,
      p.description,
      prod_f.feeling_of_use,
      prod_s.scents,
      p.main_ingredient,
      p.ingredient,
      prod_o.options,
      prod_g.guides,
      pfm.formulation
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
        subc.main_category_id,
        mc.name
    FROM sub_categories subc
    INNER JOIN main_categories mc ON mc.id=subc.main_category_id
    ) sub_cat ON sub_cat.id = p.sub_category_id
    INNER JOIN (
        SELECT
            po.product_id,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    "product_option_id", po.id,
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
    INNER JOIN product_formulations pfm ON p.product_formulation_id=pfm.id
    WHERE p.id=?;
    `,
    [productId]
  );
};

module.exports = {
  getProducts,
  getProductsByMainCategory,
  getProductsBySubCategory,
  getProductById,
};
