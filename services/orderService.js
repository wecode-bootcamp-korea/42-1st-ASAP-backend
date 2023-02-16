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

  return result;
};

module.exports = {
  order,
};
