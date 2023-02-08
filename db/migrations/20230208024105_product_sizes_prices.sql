-- migrate:up
CREATE TABLE product_sizes_prices (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    size VARCHAR(100) NULL,
    price DECIMAL(8,0) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT products_sizes_prices_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_sizes_prices;

