// src/routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateUser = require('../middleware/validateUser');
const upload = require('../middleware/upload');

// Register with file uploads
router.post(
  '/register',
  upload.fields([
    { name: 'aadhaar_xml', maxCount: 1 },
    { name: 'pan_card',     maxCount: 1 },
    { name: 'profile_pic',  maxCount: 1 }
  ]),
  validateUser,
  authController.register
);

// Login
router.post('/login', authController.login);

module.exports = router;
