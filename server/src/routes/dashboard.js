const express = require('express');
const router = express.Router();

// Dummy dashboard endpoint
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.getDashboard);

module.exports = router;
