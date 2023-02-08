-- migrate:up
CREATE TABLE product_scents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scent VARCHAR(10)
);

-- migrate:down
DROP TABLE product_scents;
