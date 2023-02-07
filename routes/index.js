const express = require('express');
const router = express.Router();

const productRouter = require('./productRouter');

router.use('/body-hand', productRouter.router);

module.exports = router;
