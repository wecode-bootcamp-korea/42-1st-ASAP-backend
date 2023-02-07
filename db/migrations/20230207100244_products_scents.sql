-- migrate:up
CREATE TABLE products_scents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scent_id INT,
    product_id INT,
    CONSTRAINT products_scents_scent_id_fkey FOREIGN KEY (scent_id) REFERENCES scents (id),
    CONSTRAINT products_scents_product_id_fkey FOREIGN KEY (product_id)REFERENCES products (id)
);

-- migrate:down
DROP TABLE products_scents;

