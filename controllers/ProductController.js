const ProDao = require('../models/Product.dao');

const signUp = async (req, res) => {
  try {
    const { name, productImg } = req.body;

    await ProDao.signUp(name, productImg);

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

const Delete = async (req, res) => {
  try {
    const {id} = req.params;

    await ProDao.Delete(id);
    
    res.status(201).end();
    
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = { signUp, Delete };
