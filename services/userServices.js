const userDao = require('../models/userDao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validate = require('../util/validators');
const SecretKey = process.env.SECRET_KEY;

const signUp = async (email, password, firstname, lastname, skintype) => {
  await validate.validateEmail(email);
  await validate.validatePassword(password);

  const user = await userDao.getuserByEmail(email);

  if (user) {
    const err = new Error('duplicated email');
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createUser = await userDao.createUser(
    email,
    hashedPassword,
    firstname,
    lastname,
    skintype
  );
  return createUser;
};

const signIn = async (email, password) => {
  await validate.validateEmail(email);
  await validate.validatePassword(password);

  const user = await userDao.getuserByEmail(email);
  const payLoad = { userId: user.id };
  const hashedPassword = user.password;
  const checkHash = await bcrypt.compare(password, hashedPassword.toString());

  if (!user) {
    const err = new Error('user does not exist');
    err.statusCode = 400;
    throw err;
  }

  if (!checkHash) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign(payLoad, SecretKey);
};

module.exports = {
  signUp,
  signIn,
};
