const express = require("express");

const { ProRouter } = require("./ProductRouter");

const routes = express.Router();

routes.use("/products", ProRouter);

module.exports = { routes };