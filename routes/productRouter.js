const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/body-hand', productController.getProductsForBodyHands);
router.get('/body-hand/hand', productController.getProductsForHands);
router.get('/body-hand/body', productController.getProductsForBodys);

module.exports = {
  router,
};
