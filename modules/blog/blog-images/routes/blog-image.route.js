const express = require('express');

const router = express.Router();

const BlogImageController =
    require('../controllers/blog-image.controller');

const upload =
    require('../../../../middleware/upload.middleware');

const {
    checkAuth
} =
require('../../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    upload.single('blog_image'),

    BlogImageController.create

);

router.get(

    '/blog/:blogId',

    BlogImageController.getByBlog

);

router.put(

    '/:id',

    checkAuth,

    BlogImageController.update

);

router.put(

    '/:id/image',

    checkAuth,

    upload.single('blog_image'),

    BlogImageController.uploadImage

);

router.delete(

    '/:id',

    checkAuth,

    BlogImageController.delete

);

module.exports = router;