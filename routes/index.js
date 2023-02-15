const express = require('express');

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');

const routes = express.Router();

routes.use('/users', userRouter.router);
routes.use('/products',productRouter.router);
routes.use('/orders',orderRouter.router);


module.exports = { routes };
