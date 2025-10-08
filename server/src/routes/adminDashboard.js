const express = require('express');
const router = express.Router();

// Dummy admin dashboard endpoint
router.get('/', (req, res) => {
  res.json({
    stats: { totalUsers: 50, totalPosts: 200, flagged: 2, banned: 1 },
    flaggedUsers: [],
    flaggedPosts: [],
    recentActivity: []
  });
});

module.exports = router;
