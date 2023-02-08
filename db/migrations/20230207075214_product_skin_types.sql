-- migrate:up
CREATE TABLE product_skin_types (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    skin_type VARCHAR(20),
    product_id INT,
    CONSTRAINT product_skin_types_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_skin_types;
