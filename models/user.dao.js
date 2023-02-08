const { AppDataSource } = require("./dataSource");

const createuser = async (email, password, firstname, lastname) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password,
      firstname,
      lastname
    ) VALUES (
      ?,
      ?,
      ?,
      ?
    )
    `,
    [email, password, firstname, lastname]
  );
};


module.exports = {createuser} 