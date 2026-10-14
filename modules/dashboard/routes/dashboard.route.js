const express = require('express');

const router = express.Router();

const DashboardController =
require('../controller/dashboard.controller');

const {
    checkAuth
} = require('../../../middleware/checkAuth');

router.get(

    '/',

    checkAuth,

    DashboardController.getDashboard

);

module.exports = router;