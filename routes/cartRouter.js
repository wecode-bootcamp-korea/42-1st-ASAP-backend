const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');
const { validateToken } = require('../middlewares/auth');

router.patch('/', validateToken, cartController.updateCart);
router.post('/', validateToken, cartController.createCart);
router.delete('/', validateToken, cartController.deleteCart);
router.get('/', validateToken, cartController.getCart);
router.get('/price', validateToken, cartController.getTotalPrice);

module.exports = {
  router,
};
