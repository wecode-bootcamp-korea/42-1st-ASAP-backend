module.exports = { routes };
const express = require('express');

const { userRouter } = require('./users.router');
const productRouter = require('./productRouter');

const routes = express.Router();

routes.use('/user', userRouter);
routes.use('/products', productRouter.router);

module.exports = { routes };
