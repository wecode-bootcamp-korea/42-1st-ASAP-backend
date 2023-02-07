-- migrate:up
CREATE TABLE product_stocks (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    qunatity INT DEFAULT 0,
	product_id INT,
	CONSTRAINT product_stocks_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_stocks;
