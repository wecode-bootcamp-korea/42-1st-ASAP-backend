const orderDao = require('../models/orderDao');

const order = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  try {
    const result = await orderDao.totalProcess(
      lastName,
      firstName,
      message,
      countryCode,
      phoneNumber,
      country,
      address,
      userId
    );
    console.log(result);
    return result;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};

const userInfo = async (id) => {
  try {
    const result = await orderDao.getUserinfo(id);
    return result;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};

module.exports = {
  order,
  userInfo,
};
