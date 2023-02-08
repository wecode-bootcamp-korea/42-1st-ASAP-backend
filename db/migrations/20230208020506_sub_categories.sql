-- migrate:up
CREATE TABLE sub_categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    main_category_id INT,
    CONSTRAINT sub_categories_main_category_id_fkey FOREIGN KEY (main_category_id) REFERENCES main_categories (id)
);

-- migrate:down
DROP TABLE sub_categories;