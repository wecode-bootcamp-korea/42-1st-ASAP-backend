const orderDao = require('../models/orderDao');

const getCart = async (req, res) => {
  try {
    const userId = req.user;
    result = await orderService.getCart(userId);

    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

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
  createCart,
  updateCart,
  deleteCart,
  createDelivery,
  createOrder,
  createOrderItem,
  delivers,
  getCart,
};
