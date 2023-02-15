 -- migrate:up
CREATE TABLE
  order_items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_option_id INT NOT NULL,
    order_id INT NOT NULL,
    order_status_id INT NOT NULL,
    quantity INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT order_items_product_option_id_fkey FOREIGN KEY (product_option_id) REFERENCES product_options (id),
    CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT order_items_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status (id)
  );

-- migrate:down
DROP TABLE
  order_items;
