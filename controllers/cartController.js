const cartService = require('../services/cartService');

const createCart = async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await cartService.createCart(userId, productOptionId, quantity);

    return res.status(201).json({ message: 'cartCreated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { productOptionId, quantity } = req.body;
    const userId = req.user;

    await cartService.updateCart(userId, productOptionId, quantity);

    return res.status(200).json({ message: 'cartUpdated' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { productOptionId } = req.body;
    const userId = req.user;

    await cartService.deleteCart(userId, productOptionId);

    return res.status(200).json({ message: 'cartDeleted' });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user;
    const result = await cartService.getCart(userId);

    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(error.code).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getCart,
};
