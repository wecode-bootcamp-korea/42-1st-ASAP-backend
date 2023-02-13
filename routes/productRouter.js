const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.getProducts);
router.get('/detail/:productId', productController.getProductById);
router.get('/:mainCategoryId', productController.getProductsByMainCategory);
router.get(
  '/:mainCategoryId/:subCategoryId',
  productController.getProductsBySubCategory
);

module.exports = {
  router,
};
