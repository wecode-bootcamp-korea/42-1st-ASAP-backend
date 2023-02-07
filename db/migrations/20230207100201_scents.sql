-- migrate:up
CREATE TABLE scents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scent VARCHAR(10)
  );

-- migrate:down
DROP TABLE scents;
