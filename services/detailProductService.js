const detailProductDao = require('../models/detailProductDao');

const getProductById1 = async () => {
  return await detailProductDao.getProductById1();
};

const getProductById2 = async () => {
  return await detailProductDao.getProductById2();
};

module.exports = {
  getProductById1,
  getProductById2,
};
