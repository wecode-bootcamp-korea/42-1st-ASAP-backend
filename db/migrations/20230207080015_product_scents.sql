-- migrate:up
CREATE TABLE product_scents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scent VARCHAR(100),
	product_id INT,
	CONSTRAINT product_scents_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_scents;
