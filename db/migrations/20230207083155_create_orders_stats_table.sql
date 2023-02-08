-- migrate:up
CREATE TABLE order_status(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);
  

-- migrate:down

DROP TABLE order_status;