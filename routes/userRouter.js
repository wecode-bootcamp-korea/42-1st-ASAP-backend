const express = require('express');

const userController = require('../controllers/userController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/', validateToken, userController.getUser);

module.exports = { router };
