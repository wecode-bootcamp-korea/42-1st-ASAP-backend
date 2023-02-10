const productDao = require('../models/productDao');

const getProductsByMainCategory = async (mainCategoryId) => {
  let result = ``;
  if (mainCategoryId) {
    result = `WHERE mc.id = ${mainCategoryId}`;
  }
  return await productDao.getProductsByMainCategory(result);
};

const getProductById = async (id) => {
  let result = ``;
  if (id) {
    result = `WHERE p.id = ${id}`;
  }
  return await productDao.getProductById(result);
};

const getProductsForHands = async (formulation, scent) => {
  let result = ``;

  if (formulation && scent) {
    result = `WHERE p.sub_category_id=12 AND pfm.formulation like "%${formulation}%" AND prod_s.scents like "%${scent}%"`;
  } else if (scent) {
    result = `WHERE p.sub_category_id=12 AND prod_s.scents like "%${scent}%"`;
  } else if (formulation) {
    result = `WHERE p.sub_category_id=12 AND pfm.formulation like "%${formulation}%"`;
  } else {
    result = `WHERE p.sub_category_id=12`;
  }
  return await productDao.getProductsForHands(result);
};

const getProductsForBodys = async (formulation, scent) => {
  let result = ``;

  if (formulation && scent) {
    result = `WHERE p.sub_category_id=13 AND pfm.formulation like "%${formulation}%" AND prod_s.scents like "%${scent}%"`;
  } else if (scent) {
    result = `WHERE p.sub_category_id=13 AND prod_s.scents like "%${scent}%"`;
  } else if (formulation) {
    result = `WHERE p.sub_category_id=13 AND pfm.formulation like "%${formulation}%"`;
  } else {
    result = `WHERE p.sub_category_id=13`;
  }
  return await productDao.getProductsForBodys(result);
};

module.exports = {
  getProductsByMainCategory,
  getProductById,
  getProductsForHands,
  getProductsForBodys,
};
