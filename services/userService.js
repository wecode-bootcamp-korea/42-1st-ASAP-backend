const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userDao = require('../models/userDao');
const validate = require('../utils/validators');

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

  if (!user) {
    const err = new Error('user does not exist');
    err.statusCode = 400;
    throw err;
  }

  const payLoad = { userId: user.id };
  const hashedPassword = user.password;
  const checkHash = await bcrypt.compare(password, hashedPassword.toString());

  if (!checkHash) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  const SECRET_KEY = process.env.SECRET_KEY;
  return jwt.sign(payLoad, SECRET_KEY);
};

const userInfo = async (id) => {
  try {
    const result = await userDao.getUserinfo(id);
    return result;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};

module.exports = {
  signUp,
  signIn,
  userInfo,
};
