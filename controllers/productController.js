const productService = require('../services/productService');

const getProductsByMainCategory = async (req, res) => {
  const mainCategoryId = req.query.mainCategoryId;

  const result = await productService.getProductsByMainCategory(mainCategoryId);

  return res.status(200).json({ data: result });
};

const getProductById = async (req, res) => {
  const id = req.query.id;

  const result = await productService.getProductById(id);

  return res.status(200).json({ data: result });
};

const getProductsForHands = async (req, res) => {
  const formulation = req.query.formulation;
  const scent = req.query.scent;

  const result = await productService.getProductsForHands(formulation, scent);

  return res.status(200).json({ data: result });
};

const getProductsForBodys = async (req, res) => {
  const formulation = req.query.formulation;
  const scent = req.query.scent;

  const result = await productService.getProductsForBodys(formulation, scent);

  return res.status(200).json({ data: result });
};

const getProductsForMainPage = async (req, res) => {
  const result = await productService.getProductsForMainPage();

  return res.status(200).json({ data: result });
};

module.exports = {
  getProductsByMainCategory,
  getProductById,
  getProductsForHands,
  getProductsForBodys,
  getProductsForMainPage,
};
