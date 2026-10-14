const express = require('express');

const router = express.Router();

const BlogReferenceController =
    require('../controllers/blog-reference.controller');

const {
    checkAuth
} =
require('../../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    BlogReferenceController.create

);

router.get(

    '/blog/:blogId',

    BlogReferenceController.getByBlog

);

router.put(

    '/:id',

    checkAuth,

    BlogReferenceController.update

);

router.delete(

    '/:id',

    checkAuth,

    BlogReferenceController.delete

);

module.exports = router;