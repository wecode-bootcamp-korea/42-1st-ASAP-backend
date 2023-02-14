const orderDao = require('../models/orderDao');

const createCart = async (userId, productId, quantity) => {
  return await orderDao.createCart(userId, productId, quantity);
};

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

const createOrderItem = async (orderId, productId, quantity) => {
  return await orderDao.createOrderItem(orderId, productId, quantity);
};

module.exports = {
  createCart,
  createDelivery,
  createOrder,
  createOrderItem,
};
