const express = require('express');

const router = express.Router();

const upload =
require('../../../middleware/upload.middleware');

const ProductController =
require('../controllers/product.controller');

const { checkAuth } =
require('../../../middleware/checkAuth');

router.post(
    '/',
    checkAuth,
    ProductController.create
);

router.get(
    '/',
    checkAuth,
    ProductController.getAll
);

router.get(
    '/:id',
    checkAuth,
    ProductController.getById
);

router.put(
    '/:id',
    checkAuth,
    ProductController.update
);

router.delete(
    '/:id',
    checkAuth,
    ProductController.remove
);

router.post(
    '/:id/upload-manual',

    checkAuth,

    upload.single('manual'),

    ProductController.uploadManual
);

router.post(
    '/:id/upload-datasheet',

    checkAuth,

    upload.single('datasheet'),

    ProductController.uploadDatasheet
);
module.exports = router;