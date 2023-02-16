const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

router.post('/', validateToken, orderController.orderProcess);

module.exports = {
  router,
};
