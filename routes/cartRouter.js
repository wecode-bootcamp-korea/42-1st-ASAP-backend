const express = require('express');
const router = express.Router();

const cartController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

router.patch('/carts', validateToken, cartController.updateCart);
router.post('/carts', validateToken, cartController.createCart);
router.delete('/carts', validateToken, cartController.deleteCart);
router.get('/carts', validateToken, cartController.getCart);

module.exports = {
  router,
};
