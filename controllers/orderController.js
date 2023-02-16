const orderService = require('../services/orderService');

const order = catchAsync(async (req, res) => {
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
  const result = await orderService.order(
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
  order,
};
