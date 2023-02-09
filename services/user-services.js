const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userDao = require('../models/user.dao');
const {checkEmail}  = require('../validators');

const signUp = async(email, password, firstname, lastname, skintype) => {
 
  await checkEmail(email)
  const user = await userDao.connectuser(email);
    if(user){
    const err = new Error('duplicated email');
    err.statusCode = 400;
    throw err;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createuser(email, hashedPassword, firstname, lastname, skintype); 
};

const signIn = async ( email, password) => {
  
  const user = await userDao.connectuser(email);

if (!user){
  const err = new Error('user does not exist');
  err.statusCode = 404;
  throw err;
}
const result = await bcrypt.compare(password, user.password);

if (!result){
  const err = new Error('invalid password');
  err.statusCode = 401;
  throw err;
}
  return jwt.sign({ sub: user.id, email:user.email}, process.env.JWT_SECRET);
};



module.exports =  {
  signUp, 
  signIn 
};