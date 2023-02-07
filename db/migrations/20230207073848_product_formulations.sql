-- migrate:up
CREATE TABLE product_formulations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    formulation VARCHAR(20),
    product_id INT,
    CONSTRAINT product_formulations_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
  );

-- migrate:down
DROP TABLE product_formulations;