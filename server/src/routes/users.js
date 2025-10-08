// GET /api/users/profile
router.get('/profile', userController.getProfile);
const express = require('express');
const router = express.Router();

// TODO: Add profile, badges, secret code, referral, rank endpoints

router.get('/:id', async (req, res) => {
  // Get user profile from DB
  const pool = require('../../index').pool;
  try {
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.params.id]);
    if (!result.rows || result.rows.length === 0) {
      console.error('❌ No user found for id', req.params.id);
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Error fetching user profile:', err);
    res.status(500).json({ error: 'Failed to fetch user profile', details: err.message });
  }
});

module.exports = router;
