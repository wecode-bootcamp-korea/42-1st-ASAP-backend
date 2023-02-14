const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

router.patch('/carts', orderController.updateCart);
router.post('/carts', orderController.createCart);
router.delete('/carts', orderController.deleteCart);
router.post('/deliveries', validateToken, orderController.createDelivery);
router.post('/items/:orderId', validateToken, orderController.createOrderItem);
router.post('/:deliveryId', validateToken, orderController.createOrder);

module.exports = {
  router,
};
