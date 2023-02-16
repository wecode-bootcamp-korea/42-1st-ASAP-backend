const express = require('express');

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/', validateToken, orderController.createOrder);

module.exports = {
  router,
};
