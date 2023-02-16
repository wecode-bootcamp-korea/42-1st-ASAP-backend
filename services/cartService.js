const cartDao = require('../models/cartDao');

const createCart = async (userId, productOptionId, quantity) => {
  return await cartDao.createCart(userId, productOptionId, quantity);
};

const updateCart = async (userId, productOptionId, quantity) => {
  return await cartDao.updateCart(userId, productOptionId, quantity);
};

const deleteCart = async (userId, productOptionId) => {
  return await cartDao.deleteCart(userId, productOptionId);
};

const getCart = async (userId) => {
  return await cartDao.getCart(userId);
};

const getTotalPrice = async (userId) => {
  return await cartDao.getTotalPrice(userId);
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getTotalPrice,
};
