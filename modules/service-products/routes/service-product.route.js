const express = require('express');

const router = express.Router();

const ServiceProductController =
require('../controllers/service-product.controller');

const {
    checkAuth
} = require('../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    ServiceProductController.create

);

router.get(

    '/completed-service/:completedServiceId',

    checkAuth,

    ServiceProductController.getByCompletedService

);

router.put(

    '/:id',

    checkAuth,

    ServiceProductController.update

);

router.delete(

    '/:id',

    checkAuth,

    ServiceProductController.delete

);

module.exports = router;