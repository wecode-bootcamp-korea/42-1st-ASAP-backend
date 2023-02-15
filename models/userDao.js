const AppDataSource = require("./dataSource");

  const createUser = async (email, password, firstname, lastname, skintype) => {
    try { 
      return AppDataSource.query(
      `
      INSERT INTO users (
        email,
        password, 
        first_name,
        last_name,
        skin_type
      ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?
       )
       `, 
          [email, password, firstname, lastname, skintype]
      );
    } catch(err) {
      const error= new Error('INVAID_DATA_INPUT');
      error.statusCode = 500;
      throw error;
      }
  
};

const getuserByEmail = async (email) => {
  const [user] = await AppDataSource.query(
    `
    SELECT 
      u.id,
      u.email,
      u.password
    FROM users u
    WHERE u.email= ?
    `,
   [email]
  )

  return user ;
};


module.exports = {
  createUser, 
  getuserByEmail
}; 