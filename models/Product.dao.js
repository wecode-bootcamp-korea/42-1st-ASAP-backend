
const { AppDataSource } = require("./ProductDatasource");

const Signup = async (email, password) => {
  await AppDataSource.query(
    `
    INSERT INTO users (
      email,
      password
    ) VALUES (
      ?,
      ?
    )
    `,
    [email, password]
  );
};

const deleteProduct = async (id) => {
  const [id] = await AppDataSource.query(
    `
      DELETE *
      FROM products
      WHERE id =${id};    
      `,
    [id]
  );

  return user;
};

module.exports = { Signup, deleteProduct };
