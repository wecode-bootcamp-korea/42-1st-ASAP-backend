const userService = require('../services/userService');
const { catchAsync } = require('../utils/error');

const signUp = catchAsync(async (req, res) => {
  const { email, password, firstname, lastname, skintype } = req.body;

  if (!email || !password || !firstname || !lastname) {
    throw new Error('KEY Error!');
  }

  await userService.signUp(email, password, firstname, lastname, skintype);

  return res.status(200).json({ message: 'SIGNUP_SUCCESS' });
});

const getUser = catchAsync(async (req, res) => {
  const userId = req.user;

  const result = await userService.userInfo(userId);

  return res.status(200).json({ data: result });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('KEY Error!');
  }
  const token = await userService.signIn(email, password);

  return res.status(200).json({ accessToken: token });
});

module.exports = {
  signUp,
  signIn,
  getUser,
};
