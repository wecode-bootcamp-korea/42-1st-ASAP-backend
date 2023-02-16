const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const orderProcess = catchAsync(async (req, res) => {
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

  await orderService.orderProcess(
    lastName,
    firstName,
    message,
    countryCode,
    phoneNumber,
    country,
    address,
    userId
  );

  return res.status(200).json({ message: '결제가 완료되었습니다.' });
});

module.exports = {
  orderProcess,
};
