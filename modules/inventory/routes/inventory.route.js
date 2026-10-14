const express = require('express');

const router = express.Router();

const InventoryController =
    require('../controllers/inventory.controller');

const { checkAuth } =
    require('../../../middleware/checkAuth');

router.post(
    '/',
    checkAuth,
    InventoryController.create
);

router.get(
    '/',
    checkAuth,
    InventoryController.getAll
);

router.get(
    '/product/:productId',
    checkAuth,
    InventoryController.getByProduct
);

module.exports = router;