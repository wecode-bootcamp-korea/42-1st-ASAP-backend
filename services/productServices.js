const productDao = require('../models/productDao');

const getProducts = async () => {
  return await productDao.getProducts();
};

const getProductsForBodyHands = async () => {
  return await productDao.getProductsForBodyHands();
};

module.exports = {
  getProducts,
  getProductsForBodyHands,
};
