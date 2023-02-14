-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_options_id INT,
    quantity INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT carts_product_options_id_fkey FOREIGN KEY (product_options_id) REFERENCES product_options (id)
);

-- migrate:down
DROP TABLE carts;
