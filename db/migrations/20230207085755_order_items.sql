-- migrate:up
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    order_id INT,
    order_status_id INT,
    quantity INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT order_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id),
    CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT order_items_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status (id)
);

-- migrate:down
DROP TABLE order_items;
