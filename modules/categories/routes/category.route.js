const express = require('express');

const router = express.Router();

const CategoryController =
    require('../controllers/category.controller');

const { checkAuth } =
    require('../../../middleware/checkAuth');

router.post(
    '/',
    checkAuth,
    CategoryController.create
);

router.get(
    '/',
    checkAuth,
    CategoryController.getAll
);

router.get(
    '/:id',
    checkAuth,
    CategoryController.getById
);

router.put(
    '/:id',
    checkAuth,
    CategoryController.update
);

router.delete(
    '/:id',
    checkAuth,
    CategoryController.delete
);

module.exports = router;