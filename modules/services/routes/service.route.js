const express = require('express');

const router = express.Router();

const ServiceController =
require('../controllers/service.controller');

const {

    checkAuth

} = require('../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    ServiceController.create

);

router.get(

    '/',

    ServiceController.getAll

);

router.get(

    '/:id',

    ServiceController.getById

);

router.put(

    '/:id',

    checkAuth,

    ServiceController.update

);

router.delete(

    '/:id',

    checkAuth,

    ServiceController.remove

);

module.exports = router;