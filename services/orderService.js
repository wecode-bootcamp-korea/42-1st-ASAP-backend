const orderDao = require('../models/orderDao');

const orderProcess = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  return await orderDao.orderProcess(
    lastName,
    firstName,
    message,
    countryCode,
    phoneNumber,
    country,
    address,
    userId
  );
};

module.exports = {
  orderProcess,
};
