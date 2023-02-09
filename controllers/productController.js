const productService = require('../services/productService');

const getProductsForBodyHands = async (req, res) => {
  const result = await productService.getProductsForBodyHands();

  return res.status(200).json({ data: result });
};

const getProductsForHands = async (req, res) => {
  const result = await productService.getProductsForHands();

  return res.status(200).json({ data: result });
};

const getProductsForBodys = async (req, res) => {
  const result = await productService.getProductsForBodys();

  return res.status(200).json({ data: result });
};

module.exports = {
  getProductsForBodyHands,
  getProductsForHands,
  getProductsForBodys,
};
