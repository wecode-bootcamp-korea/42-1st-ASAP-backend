const productDao = require('../models/productDao');

const createProduct = async (
  name,
  img_url,
  description,
  size,
  feeling,
  formulation,
  main_ingredient,
  ingredient,
  price
) => {
  return await productDao.createProduct(
    name,
    img_url,
    description,
    size,
    feeling,
    formulation,
    main_ingredient,
    ingredient,
    price
  );
};
const getProducts = async () => {
  return await productDao.getProducts();
};

module.exports = {
  createProduct,
  getProducts,
};
