const productService = require('../services/productService');

const createProduct = async (req, res) => {
  const {
    name,
    img_url,
    description,
    size,
    main_ingredient,
    ingredient,
    price,
  } = req.body;

  await productService.createProduct(
    name,
    img_url,
    description,
    size,
    main_ingredient,
    ingredient,
    price
  );
  return res.status(201).json({ message: 'Product Created' });
};

const getProducts = async (req, res) => {
  const result = await productService.getProducts();

  return res.status(200).json({ data: result });
};

module.exports = {
  createProduct,
  getProducts,
};
