
const userDao = require('../models/user.dao');

const postUsers = async() => {
  return await userDao.postUsers();
}

module.exports =  { postUsers };