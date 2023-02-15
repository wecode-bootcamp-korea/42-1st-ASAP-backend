const express = require("express");

const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/test", orderController.delivers);
router.get("/:userId",orderController.getUserinfo);


module.exports = {
  router
};
