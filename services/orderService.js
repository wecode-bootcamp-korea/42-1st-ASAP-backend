const orderDao = require('../models/orderDao');

const createDelivery = async (
  lastName,
  firstName,
  message,
  countryCode,
  phoneNumber,
  country,
  address,
  userId
) => {
  return await orderDao.createDelivery(
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

const createOrder = async (userId, deliveryId) => {
  return await orderDao.createOrder(userId, deliveryId);
};

const createOrderItem = async (orderId, userId) => {
  return await orderDao.createOrderItem(orderId, userId);
};

const delivers = async (
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

module.exports = {
  createDelivery,
  createOrder,
  createOrderItem,
  delivers,
};
