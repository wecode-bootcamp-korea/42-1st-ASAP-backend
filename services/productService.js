const productDao = require('../models/productDao');

const getProducts = async (limit) => {
  return await productDao.getProducts(limit);
};

const getProductsByMainCategory = async (mainCategoryId) => {
  return await productDao.getProductsByMainCategory(mainCategoryId);
};

const getProductsBySubCategory = async (
  mainCategoryId,
  subCategoryId,
  formulation,
  scent,
  limit
) => {
  return await productDao.getProductsBySubCategory(
    mainCategoryId,
    subCategoryId,
    formulation,
    scent,
    limit
  );
};

const getProductById = async (productId) => {
  return await productDao.getProductById(productId);
};

module.exports = {
  getProducts,
  getProductsByMainCategory,
  getProductsBySubCategory,
  getProductById,
};
