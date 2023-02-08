const ProService = require('../services/Prodctservice');

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    await ProService.signUp(email, password);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const Delete = async (req, res) => {
  try {
    const {id} = req.params;

    await ProService.Delete(id);
    
    res.status(201).end();
    
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, Delete };
