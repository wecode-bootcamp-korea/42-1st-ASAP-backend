const express = require('express');
const router = express.Router();

const productRouter = require('./userRouter');

router.use('/users', userRouter.router);

module.exports = router;
