const orderDao = require('../models/orderDao');

const createOrder = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  const result = await orderDao.createOrder(
    lastName,
    firstName,
    message,
    countryCode,
    phoneNumber,
    country,
    address,
    userId
  );

  return result;
};

module.exports = {
  createOrder,
};
