const mysqlDataSource = require('./dataSource');

const getProductById1 = async () => {
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
      WHERE p.id=1;
      `
  );
};

const getProductById2 = async () => {
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
        WHERE p.id=2;
        `
  );
};

module.exports = {
  getProductById1,
  getProductById2,
};
