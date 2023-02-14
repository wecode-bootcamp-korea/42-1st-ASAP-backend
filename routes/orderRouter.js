const express = require('express');
const router = express.Router();​
const orderController = require('../controllers/orderController');

router.post('/carts', orderController.createCart);
router.post('/deliveries', orderController.createDelivery);

router.patch(결제??)


