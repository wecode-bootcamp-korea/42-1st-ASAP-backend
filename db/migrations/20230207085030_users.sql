-- migrate:up
 CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT ,
    last_name VARCHAR(20) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL,
    password BINARY(60) NOT NULL ,
    skin_type VARCHAR(20) NULL ,
    point DECIMAL(8, 0) ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
 )
-- migrate:down
DROP TABLE users;