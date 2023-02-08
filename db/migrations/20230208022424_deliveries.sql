-- migrate:up
CREATE TABLE deliveries (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    message VARCHAR(100) NULL,
    country_code INT NOT NULL ,
    phone_number VARCHAR(20) NOT NULL ,
    country VARCHAR(30),
    adress VARCHAR(50),
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT delieveries_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id)
    );

-- migrate:down
DROP TABLE deliveries;

