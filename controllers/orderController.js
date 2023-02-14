const orderService = require('../services/orderService');

const createCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    await orderService.createCart(userId, productId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

const createDelivery = async (req, res) => {
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
};

const createOrder = async (req, res) => {
  try {
    const { userId, deliveryId } = req.params;

    await orderService.createOrder(userId, deliveryId);

    return res.status(201).json({ message: 'orderCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  createDelivery,
  createOrder,
};
