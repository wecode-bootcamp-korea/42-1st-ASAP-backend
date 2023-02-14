const userService = require('../services/userServices');

const signUp = async (req, res) => {
  try {
    const { email, password, firstname, lastname, skintype } = req.body;

    if (!email || !password || !firstname || !lastname) {
      throw new Error('KEY Error!');
    }

    await userService.signUp(email, password, firstname, lastname, skintype);

    return res.status(201).send({ message: 'SIGNUP_SUCCESS' });
  } catch (err) {
    return res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('KEY Error!');
    }
    await userService.signIn(email, password);

    return res.status(200).json('SIGNIN SUCCESS!');
  } catch (err) {
    return res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = {
  signUp,
  signIn,
};
