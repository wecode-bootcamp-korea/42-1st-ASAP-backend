const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

router.patch('/carts', validateToken, orderController.updateCart);
router.post('/carts', validateToken, orderController.createCart);
router.delete('/carts', validateToken, orderController.deleteCart);
router.post('/deliveries', validateToken, orderController.createDelivery);
router.post('/items/:orderId', validateToken, orderController.createOrderItem);
router.post('/:deliveryId', validateToken, orderController.createOrder);

module.exports = {
  router,
};
