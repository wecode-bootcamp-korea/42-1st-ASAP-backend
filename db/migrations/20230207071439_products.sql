-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    img_url VARCHAR(3000) NULL,
    description VARCHAR(3000) NOT NULL,
    size VARCHAR(100) NULL,
    feeling VARCHAR(100) NOT NULL,
    formulation VARCHAR(100) NOT NULL,
    main_ingredient VARCHAR(100) NOT NULL,
    ingredient VARCHAR(3000) NOT NULL,
    price decimal(8, 0) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- migrate:down
DROP TABLE products;