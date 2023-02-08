-- migrate:up
CREATE TABLE product_formulations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    formulation varchar(20)
);

-- migrate:down
DROP TABLE product_formulations;
