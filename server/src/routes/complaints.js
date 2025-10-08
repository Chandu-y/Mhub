const express = require('express');
const router = express.Router();

// Dummy complaints endpoint
const complaintsController = require('../controllers/complaintsController');

router.get('/', complaintsController.getComplaints);

module.exports = router;
