const productDao = require('../models/productDao');

const getProducts = async () => {
  return await productDao.getProducts();
};

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
  getProducts,
  getProductsForBodyHands,
  getProductsForHands,
  getProductsForBodys,
};
