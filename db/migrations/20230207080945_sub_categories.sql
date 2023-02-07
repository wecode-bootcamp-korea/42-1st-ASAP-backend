-- migrate:up
CREATE TABLE product_sub_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sub_category_name VARCHAR(20),
    product_id INT,
    CONSTRAINT product_sub_categories_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_sub_categories