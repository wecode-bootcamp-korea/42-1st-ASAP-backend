-- migrate:up
CREATE TABLE product_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(20),
    product_id INT,
    CONSTRAINT product_categories_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_categories;