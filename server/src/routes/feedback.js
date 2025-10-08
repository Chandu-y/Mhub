const express = require('express');
const router = express.Router();

// Dummy feedback endpoint
const feedbackController = require('../controllers/feedbackController');

router.get('/', feedbackController.getFeedback);

module.exports = router;
