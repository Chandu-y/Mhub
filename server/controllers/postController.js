// postController.js
const db = require('../config/db');

// AddPost: validate and create post after tier/category selection
exports.createPost = async (req, res) => {
  const { user_id, category_id, tier_id, title, description, price, latitude, longitude } = req.body;
  // Server-side validation
  const v = await db.query('SELECT * FROM validate_add_post($1,$2,$3,$4,$5,$6,$7)', [user_id, category_id, tier_id, title, price, latitude, longitude]);
  if (!v.rows[0].valid) return res.status(400).json({ error: v.rows[0].message, field: v.rows[0].field });
  try {
    const result = await db.query(
      `INSERT INTO posts (user_id, category_id, title, description, price, status, created_at) VALUES ($1,$2,$3,$4,$5,'active',NOW()) RETURNING post_id`,
      [user_id, category_id, title, description, price]
    );
    // Optionally: insert location, tier, etc.
    res.json({ post_id: result.rows[0].post_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SaleDone/SaleUndone: transition sale state
exports.updateSaleStatus = async (req, res) => {
  const { sale_id, new_status, user_id } = req.body;
  const v = await db.query('SELECT * FROM validate_sale_transition($1,$2)', [sale_id, new_status]);
  if (!v.rows[0].valid) return res.status(400).json({ error: v.rows[0].message, field: v.rows[0].field });
  try {
    const old = await db.query('SELECT sale_status FROM sales WHERE sale_id=$1', [sale_id]);
    await db.query('UPDATE sales SET sale_status=$1 WHERE sale_id=$2', [new_status, sale_id]);
    await db.query('INSERT INTO sale_transitions (sale_id, old_status, new_status, changed_by) VALUES ($1,$2,$3,$4)', [sale_id, old.rows[0].sale_status, new_status, user_id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Recommendations: get posts for user
exports.getRecommendations = async (req, res) => {
  const { user_id } = req.query;
  try {
    const recs = await db.query('SELECT * FROM get_recommendations($1)', [user_id]);
    res.json(recs.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ...other endpoints for categories, notifications, rewards, etc.
