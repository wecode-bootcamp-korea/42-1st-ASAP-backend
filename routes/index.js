const express = require('express');
const router = express.Router();

const productRouter = require('./productRouter');
const detailProductRouter = require('./detailProductRouter');

router.use('/', productRouter.router);
router.use('/', detailProductRouter.router);

module.exports = router;
