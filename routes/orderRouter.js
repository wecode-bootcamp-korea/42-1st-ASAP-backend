const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

router.post('/carts', validateToken, orderController.createCart);
router.post('/deliveries', validateToken, orderController.createDelivery);
router.post('/items/:orderId', validateToken, orderController.createOrderItem);
router.post('/:userId/:deliveryId', validateToken, orderController.createOrder);

module.exports = {
  router,
};
