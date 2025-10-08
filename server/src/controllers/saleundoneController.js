const pool = require('../../config/db');

exports.getSaleUndone = async (req, res) => {
  try {
    // Fetch posts with status 'undone' (or similar logic)
    const result = await pool.query("SELECT * FROM posts WHERE status = 'undone'");
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching saleundone posts:', err);
    res.status(500).json({ error: err.message });
  }
};
