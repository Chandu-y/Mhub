const express = require('express');
const router = express.Router();
const { pool } = require('../../index');

// GET /api/brands
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM brands ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
