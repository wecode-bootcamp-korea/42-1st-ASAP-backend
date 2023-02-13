const productDao = require('../models/productDao');

const getProducts = async (limitValue) => {
  let limitResult = ``;

  if (limitValue) {
    limitResult = `ORDER BY RAND() LIMIT ${limitValue}`;
  }
  return await productDao.getProducts(limitResult);
};

const getProductsByMainCategory = async (mainCategoryId) => {
  return await productDao.getProductsByMainCategory(mainCategoryId);
};

const getProductsBySubCategory = async (
  mainCategoryId,
  subCategoryId,
  formulation,
  scent,
  limitValue
) => {
  let formulationResult = ``;

  if (formulation) {
    formulationResult = `AND pfm.formulation like "%${formulation}%"`;
  }

  let scentResult = ``;

  if (scent) {
    scentResult = `AND prod_s.scents like "%${scent}%"`;
  }

  let limitResult = ``;

  if (limitValue) {
    limitResult = `LIMIT ${limitValue}`;
  }

  return await productDao.getProductsBySubCategory(
    mainCategoryId,
    subCategoryId,
    formulationResult,
    scentResult,
    limitResult
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
