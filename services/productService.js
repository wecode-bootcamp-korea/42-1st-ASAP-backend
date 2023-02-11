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
  let result = ``;

  if (formulation && scent) {
    result = `WHERE sub_cat.main_category_id=${mainCategoryId} AND p.sub_category_id=${subCategoryId} AND pfm.formulation like "%${formulation}%" AND prod_s.scents like "%${scent}%"`;
  } else if (scent) {
    result = `WHERE sub_cat.main_category_id=${mainCategoryId} AND p.sub_category_id=${subCategoryId} AND prod_s.scents like "%${scent}%"`;
  } else if (formulation) {
    result = `WHERE sub_cat.main_category_id=${mainCategoryId} AND p.sub_category_id=${subCategoryId} AND pfm.formulation like "%${formulation}%"`;
  } else {
    result = `WHERE sub_cat.main_category_id=${mainCategoryId} AND p.sub_category_id=${subCategoryId}`;
  }

  let limitResult = ``;

  if (limitValue) {
    limitResult = `LIMIT ${limitValue}`;
  }

  return await productDao.getProductsBySubCategory(result, limitResult);
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
