const pool = require('../../config/db');

exports.getAllCategories = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.category_id, c.name, c.icon_url,
        (SELECT COUNT(*) FROM posts p WHERE p.category_id = c.category_id) AS product_count
      FROM categories c
      ORDER BY c.name ASC
    `);
    if (!result.rows || result.rows.length === 0) {
      console.error('❌ No categories found in DB');
      return res.status(404).json({ error: 'No categories found' });
    }
    console.log('✅ Categories fetched:', result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching categories:', err);
    res.status(500).json({ error: err.message });
  }
};
