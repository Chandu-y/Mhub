const pool = require('../../config/db');

exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.query;
    const result = await pool.query('SELECT * FROM profiles WHERE user_id = $1', [userId]);
    res.json(result.rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update profile endpoint
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const { full_name, phone, address, avatar_url, bio } = req.body;
    // Update profiles table
    const result = await pool.query(
      `UPDATE profiles SET full_name = $1, phone = $2, address = $3, avatar_url = $4, bio = $5
       WHERE user_id = $6 RETURNING *`,
      [full_name, phone, address, avatar_url, bio, userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
