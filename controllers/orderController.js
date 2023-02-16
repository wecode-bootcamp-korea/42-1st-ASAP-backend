const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createOrder = catchAsync(async (req, res) => {
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

  await orderService.createOrder(
    lastName,
    firstName,
    message,
    countryCode,
    phoneNumber,
    country,
    address,
    userId
  );
  return res.status(200).json({ message: '오더 생성 완료' });
});

module.exports = {
  createOrder,
};
