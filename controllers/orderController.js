const orderService = require('../services/orderSerciveces');

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

const getUserinfo = async (req, res) => {
  const {userId}  = req.params
  console.log(userId);

  const result = await orderService.userInfo(
    userId);


  return res.status(200).json({ data: result });
};

module.exports = {
  delivers,
  getUserinfo
}