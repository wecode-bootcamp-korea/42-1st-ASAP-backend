const productService = require('../services/productServices');

const getProducts = async (req, res) => {
  const result = await productService.getProducts();

  return res.status(200).json({ data: result });
};

module.exports = {
  getProducts,
};
