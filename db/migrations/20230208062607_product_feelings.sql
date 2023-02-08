-- migrate:up
CREATE TABLE product_feelings(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

-- migrate:down
DROP TABLE product_feelings;
