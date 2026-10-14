const express =
require('express');

const router =
express.Router();

const PublicController =
require('../controllers/public.controller');

router.get(
    '/home',
    PublicController.home
);

router.get(
    '/products',
    PublicController.products
);

router.get(
    '/products/:id',
    PublicController.product
);

router.get(
    '/services',
    PublicController.services
);

router.get(
    '/services/:id',
    PublicController.service
);

router.get(
    '/blog',
    PublicController.blog
);

router.get(
    '/blog/:slug',
    PublicController.blogDetail
);

module.exports = router;