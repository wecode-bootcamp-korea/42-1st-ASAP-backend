const orderDao = require('../models/orderDao');

const createCart = async (userId, productOptionId, quantity) => {
  return await orderDao.createCart(userId, productOptionId, quantity);
};

const updateCart = async (userId, productOptionId, quantity) => {
  return await orderDao.updateCart(userId, productOptionId, quantity);
};

const deleteCart = async (userId, productOptionId) => {
  return await orderDao.deleteCart(userId, productOptionId);
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

const createOrderItem = async (orderId, userId) => {
  return await orderDao.createOrderItem(orderId, userId);
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  createDelivery,
  createOrder,
  createOrderItem,
};
