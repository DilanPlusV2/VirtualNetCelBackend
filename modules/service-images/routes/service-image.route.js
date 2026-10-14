const express = require('express');

const router = express.Router();

const ServiceImageController =
require('../controllers/service-image.controller');

const upload =
require('../../../middleware/upload.middleware');

const {
    checkAuth
} = require('../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    upload.single('service_image'),

    ServiceImageController.create

);

router.get(

    '/service/:serviceId',

    ServiceImageController.getByService

);

router.put(

    '/:id',

    checkAuth,

    ServiceImageController.update

);

router.put(

    '/:id/image',

    checkAuth,

    upload.single('service_image'),

    ServiceImageController.uploadImage

);

router.delete(

    '/:id',

    checkAuth,

    ServiceImageController.delete

);

module.exports = router;