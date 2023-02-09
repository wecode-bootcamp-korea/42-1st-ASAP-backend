const detailProductService = require('../services/detailProductService');

const getProductById1 = async (req, res) => {
  const result = await detailProductService.getProductById1();

  return res.status(200).json({ data: result });
};

const getProductById2 = async (req, res) => {
  const result = await detailProductService.getProductById2();

  return res.status(200).json({ data: result });
};
module.exports = {
  getProductById1,
  getProductById2,
};
