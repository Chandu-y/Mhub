const express = require('express');
const router = express.Router();

// TODO: Add user/post management, flagging, reports, announcements endpoints

router.get('/users', (req, res) => {
  // Get all users
  res.send('Admin get users endpoint');
});

module.exports = router;
