-- migrate:up
CREATE TABLE products_product_scents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_scent_id INT,
    product_id INT,
    CONSTRAINT products_product_scents_product_scent_id_fkey FOREIGN KEY (product_scent_id) REFERENCES product_scents (id),
    CONSTRAINT products_product_scents_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);


-- migrate:down
DROP TABLE products_product_scents;

