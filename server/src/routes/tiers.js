const express = require('express');
const router = express.Router();
const tiersController = require('../controllers/tiersController');

router.get('/', tiersController.getTiers);

module.exports = router;
