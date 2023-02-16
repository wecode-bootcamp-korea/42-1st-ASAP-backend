const cartService = require('../services/cartService');
const { catchAsync } = require('../utils/error');

const createCart = catchAsync(async (req, res) => {
  const { productOptionId, quantity } = req.body;
  const userId = req.user;

  await cartService.createCart(userId, productOptionId, quantity);

  return res.status(201).json({ message: 'cartCreated' });
});

const updateCart = catchAsync(async (req, res) => {
  const { productOptionId, quantity } = req.body;
  const userId = req.user;

  await cartService.updateCart(userId, productOptionId, quantity);

  return res.status(200).json({ message: 'cartUpdated' });
});

const deleteCart = catchAsync(async (req, res) => {
  const { productOptionId } = req.body;
  const userId = req.user;

  await cartService.deleteCart(userId, productOptionId);

  return res.status(200).json({ message: 'cartDeleted' });
});

const getCart = catchAsync(async (req, res) => {
  const userId = req.user;
  const result = await cartService.getCart(userId);

  return res.status(200).json({ data: result });
});

const getTotalPrice = catchAsync(async (req, res) => {
  const userId = req.user;
  const result = await cartService.getTotalPrice(userId);

  return res.status(200).json({ data: result });
});

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getTotalPrice,
};
