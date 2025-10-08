// DEPRECATED: Use the pool exported from index.js instead of this file.

const { Pool } = require("pg");
require("dotenv").config();

// Create a pool (connection to DB)
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test the connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch(err => console.error("❌ DB connection error", err));

module.exports = pool;
