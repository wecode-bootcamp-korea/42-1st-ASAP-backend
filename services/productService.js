const productDao = require('../models/productDao');

const getProductsForBodyHands = async () => {
  return await productDao.getProductsForBodyHands();
};

const getProductsForHands = async () => {
  return await productDao.getProductsForHands();
};

const getProductsForBodys = async () => {
  return await productDao.getProductsForBodys();
};

module.exports = {
  getProductsForBodyHands,
  getProductsForHands,
  getProductsForBodys,
};
