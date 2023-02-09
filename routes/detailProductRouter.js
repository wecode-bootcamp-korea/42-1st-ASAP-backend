const express = require('express');
const router = express.Router();

const detailProductController = require('../controllers/detailProductController');

router.get(
  '/body-hand/body/citrus-hand-wash',
  detailProductController.getProductById1
);
router.get(
  '/body-hand/body/wood-hand-wash',
  detailProductController.getProductById2
);

module.exports = {
  router,
};
