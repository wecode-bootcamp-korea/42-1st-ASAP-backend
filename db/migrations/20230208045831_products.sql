-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    img_url VARCHAR(3000) NULL,
    description VARCHAR(3000) NOT NULL,
    main_ingredient VARCHAR(100) NOT NULL,
    ingredient VARCHAR(3000) NOT NULL,
    sub_category_id INT NULL,
    product_formulation_id INT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT products_sub_category_id_fkey FOREIGN KEY (sub_category_id) REFERENCES sub_categories (id),
    CONSTRAINT products_product_formulation_id_fkey FOREIGN KEY (product_formulation_id) REFERENCES product_formulations (id)
);

-- migrate:down
DROP TABLE products;
