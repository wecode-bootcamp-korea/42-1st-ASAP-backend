-- migrate:up
CREATE TABLE main_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

-- migrate:down
DROP TABLE main_categories;