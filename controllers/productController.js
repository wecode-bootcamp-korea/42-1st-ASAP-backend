const productService = require('../services/productService');
const { catchAsync } = require('../utils/error');

const getProducts = catchAsync(async (req, res) => {
  const { limit } = req.query;

  const result = await productService.getProducts(limit);

  return res.status(200).json({ data: result });
});

const getProductsByMainCategory = catchAsync(async (req, res) => {
  const { mainCategoryId } = req.params;
  const { limit } = req.query;

  const result = await productService.getProductsByMainCategory(
    mainCategoryId,
    limit
  );

  return res.status(200).json({ data: result });
});

const getProductsBySubCategory = catchAsync(async (req, res) => {
  const { mainCategoryId, subCategoryId } = req.params;
  const { formulation, scent, limit } = req.query;

  const result = await productService.getProductsBySubCategory(
    mainCategoryId,
    subCategoryId,
    formulation,
    scent,
    limit
  );

  return res.status(200).json({ data: result });
});

const getProductById = catchAsync(async (req, res) => {
  const { productId } = req.params;

  const result = await productService.getProductById(productId);

  return res.status(200).json({ data: result });
});

module.exports = {
  getProducts,
  getProductsByMainCategory,
  getProductsBySubCategory,
  getProductById,
};
