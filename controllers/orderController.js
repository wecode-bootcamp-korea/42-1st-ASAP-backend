const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createCart = catchAsync(async (req, res) => {
  try {
    const { userId, productOptionId, quantity } = req.body;
    // const userId = req.user.userId;

    await orderService.createCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

// const getTotalPrice = catchAsync(async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     await orderService.getTotalPrice(userId);

//     return res.status(201).json({ message: 'get Total Price Successfully' });
//   } catch (error) {
//     return res.status(error.code).json({ message: error.message });
//   }
// });

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
    const userId = req.user.userId;

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
    const userId = req.user.userId;

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

    await orderService.createOrderItem(orderId, productId, quantity, userId);

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
