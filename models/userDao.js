const AppDataSource = require('./dataSource');

const createUser = async (email, password, firstname, lastname, skintype) => {
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
  );

  return user;
};

const getUserinfo = async (userId) => {
  const user = await AppDataSource.query(
    `
    SELECT 
      u.id,
      u.email,
      u.first_name,
      u.last_name
    FROM users u
    WHERE u.id = ?;
    `,
    [userId]
  );
  return user;
};

module.exports = {
  createUser,
  getuserByEmail,
  getUserinfo,
};
