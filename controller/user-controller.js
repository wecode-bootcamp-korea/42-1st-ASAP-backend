const userService = require('../services/user-services');

const signUp = async (req, res) => {
  try {
    const {email, password, firstname, lastname} =req.body;

    await userService.signUp(email, password, firstname, lastname);

    res.status(201).end();
  }catch (err) {
    res.status(err.statusCode || 400).json({message: err.message});
  }
};


module.exports = { signUp };
