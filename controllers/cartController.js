const cartService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await cartService.createCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const updateCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await cartService.updateCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartUpdated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const deleteCart = catchAsync(async (req, res) => {
  try {
    const { productOptionId } = req.body;
    const userId = req.user;

    await cartService.deleteCart(userId, productOptionId);

    return res.status(201).json({ message: 'cartDeleted' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

const getCart = catchAsync(async (req, res) => {
  try {
    const userId = req.user;
    result = await cartService.getCart(userId);

    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
});

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
};
