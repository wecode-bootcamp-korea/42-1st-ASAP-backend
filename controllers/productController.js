const productService = require('../services/productService');

const getProducts = async (req, res) => {
  const limitValue = req.query.limit;

  const result = await productService.getProducts(limitValue);

  return res.status(200).json({ data: result });
};

const getProductsByMainCategory = async (req, res) => {
  const { mainCategoryId } = req.params;

  const result = await productService.getProductsByMainCategory(mainCategoryId);

  return res.status(200).json({ data: result });
};

const getProductsBySubCategory = async (req, res) => {
  const { mainCategoryId, subCategoryId } = req.params;
  const formulation = req.query.formulation;
  const scent = req.query.scent;
  const limitValue = req.query.limit;

  const result = await productService.getProductsBySubCategory(
    mainCategoryId,
    subCategoryId,
    formulation,
    scent,
    limitValue
  );

  return res.status(200).json({ data: result });
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  const result = await productService.getProductById(productId);

  return res.status(200).json({ data: result });
};
module.exports = {
  getProducts,
  getProductsByMainCategory,
  getProductsBySubCategory,
  getProductById,
};
