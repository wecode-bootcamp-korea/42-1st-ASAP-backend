const productDao = reqiure('../models/productDao');

const getProducts = async () => {
  return await productDao.getProducts();
};

module.exports = {
  getProducts,
};
