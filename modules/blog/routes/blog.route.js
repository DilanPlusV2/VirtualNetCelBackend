const express = require('express');

const router = express.Router();

const BlogController =
require('../controllers/blog.controller');

const upload =
require('../../../middleware/upload.middleware');

const {
    checkAuth
} =
require('../../../middleware/checkAuth');

router.post(
    '/',
    checkAuth,
    BlogController.create
);

router.get(
    '/',
    BlogController.getAll
);

router.get(
    '/:id',
    BlogController.getById
);

router.put(
    '/:id',
    checkAuth,
    BlogController.update
);

router.post(
    '/:id/banner',
    checkAuth,
    upload.single('blog_banner'),
    BlogController.uploadBanner
);

router.post(
    '/:id/like',
    BlogController.like
);

module.exports = router;