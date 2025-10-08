const express = require('express');
const router = express.Router();
const { pool } = require('../../index');

// GET /api/profile?userId=1
router.get('/', async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  try {
    const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
    if (!result.rows.length) return res.status(404).json({ error: 'Profile not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/profile/preferences?userId=1
router.get('/preferences', async (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  try {
    const result = await pool.query('SELECT * FROM preferences WHERE user_id = $1', [userId]);
    if (!result.rows.length) return res.status(404).json({ error: 'Preferences not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
