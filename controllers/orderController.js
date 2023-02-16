const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createDelivery = catchAsync(async (req, res) => {
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
});

const createOrder = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const userId = req.user;

  await orderService.createOrder(userId, deliveryId);

  return res.status(201).json({ message: 'orderCreated' });
});

const createOrderItem = catchAsync(async (req, res) => {
  const { orderId } = req.params;
  const userId = req.user;

  await orderService.createOrderItem(orderId, userId);

  return res.status(201).json({ message: 'orderItemCreated' });
});

const delivers = async (req, res) => {
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
};

module.exports = {
  createDelivery,
  createOrder,
  createOrderItem,
  delivers,
};
