const express = require("express");

const ProController = require("../controllers/ProductController");

const ProRouter = express.Router();

ProRouter.post("/signup", ProController.signUp);
ProRouter.delete("/delete", ProController.signIn);

module.exports = { ProRouter };