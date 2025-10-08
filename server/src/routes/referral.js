const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');

// GET /api/referral
router.get('/', referralController.getReferral);

module.exports = router;
