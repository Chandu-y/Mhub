// postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// AddPost flow
router.post('/add', postController.createPost);

// SaleDone/SaleUndone
router.post('/sale-status', postController.updateSaleStatus);

// Recommendations
router.get('/recommendations', postController.getRecommendations);

// ...other routes for categories, notifications, rewards, etc.

module.exports = router;
