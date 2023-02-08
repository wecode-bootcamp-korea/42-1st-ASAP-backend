const express = require('express');

const {userRouter} = require('./users.router');

const routes = express.Router();

routes.use('/user', userRouter);

module.exports = {routes}