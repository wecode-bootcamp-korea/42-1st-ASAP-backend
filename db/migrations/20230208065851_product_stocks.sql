-- migrate:up
CREATE TABLE product_stocks (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quantity INT DEFAULT 0,
    product_option_id INT,
    CONSTRAINT product_stocks_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE product_stocks;
