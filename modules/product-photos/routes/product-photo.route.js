const express = require('express');

const router = express.Router();

const ProductPhotoController =
require('../controllers/product-photo.controller');

const upload =
require('../../../middleware/upload.middleware');

const {
    checkAuth
} = require('../../../middleware/checkAuth');

router.post(
    '/upload-image',

    checkAuth,

    upload.single('image'),

    ProductPhotoController.upload
);

router.get(
    '/product/:productId',

    checkAuth,

    ProductPhotoController.getByProduct
);

router.delete(
    '/:id',

    checkAuth,

    ProductPhotoController.delete
);

module.exports = router;