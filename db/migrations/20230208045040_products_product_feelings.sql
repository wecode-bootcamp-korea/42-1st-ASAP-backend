-- migrate:up
CREATE TABLE products_product_feelings(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    product_feeling_id INT,
    CONSTRAINT products_product_feelings_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
    CONSTRAINT products_product_feelings_product_feeling_id_fkey FOREIGN KEY (product_feeling_id) REFERENCES product_feelings (id)
);

-- migrate:down
DROP TABLE products_product_feelings;
