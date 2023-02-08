-- migrate:up
CREATE TABLE product_size_stocks (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantity INT DEFAULT 0,
    product_size_id INT,
    CONSTRAINT product_size_stocks_product_size_id_fkey FOREIGN KEY (product_size_id) REFERENCES product_sizes_prices (id)
);

-- migrate:down
DROP TABLE product_size_stocks;
