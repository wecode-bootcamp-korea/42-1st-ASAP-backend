const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userDao = require('../models/user.dao');

const { validateEmail }  = require('../../util/validators');



const signUp = async(email, password, firstname, lastname, skintype) => {
 
   await validateEmail(email)
   
   const user = await userDao.getuserByEmail(email);
  
   if (user){
    const err = new Error('duplicated email');
    err.statusCode = 400;
    throw err;
  }
  
   const hashedPassword = await bcrypt.hash(password, 10);
   
   return await userDao.createUser(email, hashedPassword, firstname, lastname, skintype); 
};

const signIn = async(email, password) =>{
   const user = await userDao.getuserByEmail(email);
   
   const hashedPassword = await bcrypt.hash(password, 10);

   const result = await bcrypt.compare(hashedPassword, user.password.toString());
  
   if (!user) {
    const err = new Error('user does not exist');
    err.statusCode = 404;
    throw err;
   }
   

   if(!result){
    const err =new Error('invalid password');
    err.statusCode = 401;
    throw err;
   }

   return jwt.sign({userId: user.id }, progress.env.JWT_SECRET);
};




module.exports =  {
  signUp, 
  signIn 
};