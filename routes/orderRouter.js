const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.post('/carts', orderController.createCart);
router.post('/deliveries', orderController.createDelivery);
router.post('/items/:orderId', orderController.createOrderItem);
router.post('/:userId/:deliveryId', orderController.createOrder);

module.exports = {
  router,
};
