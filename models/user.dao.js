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

const connectuser = async (email) => {
  const user = await AppDataSource.query(
    `
     SELECT 
     FROM users u(
      WHERE u.email= ?
      

      )
    `
    [email]
    
  )
  
}


module.exports = {
  createuser, 
  connectuser
}; 