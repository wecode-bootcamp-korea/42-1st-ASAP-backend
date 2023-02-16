const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const getCart = catchAsync(async (req, res) => {
  try {
    const userId = req.user;
    result = await orderService.getCart(userId);

    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const createCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await orderService.createCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const updateCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await orderService.updateCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartUpdated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const deleteCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId } = req.body;
    const userId = req.user;

    await orderService.deleteCart(userId, productOptionId);

    return res.status(201).json({ message: 'cartDeleted' });
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
    } = req.body;
    const userId = req.user;

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
    const { deliveryId } = req.params;
    const userId = req.user;

    await orderService.createOrder(userId, deliveryId);

    return res.status(201).json({ message: 'orderCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const createOrderItem = catchAsync(async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user;

    await orderService.createOrderItem(orderId, userId);

    return res.status(201).json({ message: 'orderItemCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const delivers = async (req, res) => {
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
    const result = await orderService.delivers(
      lastName,
      firstName,
      message,
      countryCode,
      phoneNumber,
      country,
      address,
      userId
    );
    console.log(result);
    return res.status(200).json({ message: 'ㅇㅇㅇ' });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  createDelivery,
  createOrder,
  createOrderItem,
  delivers,
  getCart,
};
