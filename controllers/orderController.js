const orderService = require('../services/orderService');

const order = async (req, res) => {
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
    console.log(result);
    return res.status(200).json({ message: '오더 생성 완료' });
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 400)
      .json({ message: 'Not enough Money', message: err.message });
  }
};

const getUserinfo = async (req, res) => {
  const { userId } = req.params;

  const result = await orderService.userInfo(userId);

  return res.status(200).json({ data: result });
};

module.exports = {
  order,
  getUserinfo,
};
