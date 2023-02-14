const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createCart = catchAsync(async (req, res) => {
  try {
    const { userId, productOptionId, quantity } = req.body;

    await orderService.createCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const createDelivery = catchAsync(async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      message,
      countryCode,
      phoneNumber,
      country,
      address,
      userId,
    } = req.body;

    await orderService.createDelivery(
      lastName,
      firstName,
      message,
      countryCode,
      phoneNumber,
      country,
      address,
      userId
    );

    return res.status(201).json({ message: 'deliveryCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const createOrder = catchAsync(async (req, res) => {
  try {
    const { userId, deliveryId } = req.params;

    await orderService.createOrder(userId, deliveryId);

    return res.status(201).json({ message: 'orderCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const createOrderItem = catchAsync(async (req, res) => {
  try {
    const { orderId } = req.params;
    const { productId, quantity } = req.body;

    await orderService.createOrderItem(orderId, productId, quantity);

    return res.status(201).json({ message: 'orderItemCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

module.exports = {
  createCart,
  createDelivery,
  createOrder,
  createOrderItem,
};
