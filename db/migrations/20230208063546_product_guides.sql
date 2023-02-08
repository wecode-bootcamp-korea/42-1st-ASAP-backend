-- migrate:up
CREATE TABLE product_guides (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(3000) NULL,
    video_url VARCHAR(3000) NULL,
    usage_description VARCHAR(3000) NOT NULL,
    usage_amount VARCHAR(20) NULL,
    texture VARCHAR(20) NULL,
    blending VARCHAR(1000) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT product_guides_product_id_fkey FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_guides;
