-- migrate:up
CREATE TABLE order_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cart_id INT,
    order_id INT,
    order_status_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT order_items_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES carts (id),
    CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT order_items_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status (id)
);

-- migrate:down
DROP TABLE order_items;
