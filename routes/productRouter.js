const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/products', productController.getProductsByMainCategory);
router.get('/body-hand/hand', productController.getProductsForHands);
router.get('/body-hand/body', productController.getProductsForBodys);
router.get('/products/detail', productController.getProductById);

module.exports = {
  router,
};
