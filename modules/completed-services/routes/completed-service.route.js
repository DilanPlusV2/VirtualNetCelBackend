const express = require('express');

const router = express.Router();

const CompletedServiceController =
require('../controllers/completed-service.controller');

const {

    checkAuth

} = require('../../../middleware/checkAuth');

router.post(

    '/',

    checkAuth,

    CompletedServiceController.create

);

router.get(

    '/',

    CompletedServiceController.getAll

);

router.get(

    '/:id',

    CompletedServiceController.getById

);

router.put(

    '/:id',

    checkAuth,

    CompletedServiceController.update

);

router.delete(

    '/:id',

    checkAuth,

    CompletedServiceController.remove

);

module.exports = router;