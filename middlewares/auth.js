const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!decoded) {
      throw new Error('Invalid User');
    }

    req.user = decoded.userId;

    return next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Access Token' });
  }
};

module.exports = {
  validateToken,
};
