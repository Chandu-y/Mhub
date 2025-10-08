# Verified Mobile Phone Sale Platform Backend

This is the backend for the Verified Mobile Phone Sale Platform. It uses Node.js, Express, and PostgreSQL.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your database credentials.
3. Run the development server:
   ```bash
   npm run dev
   ```

## Structure
- `src/` — Source code
- `config/` — Database config
- `migrations/` — SQL migration scripts

## Features
- User authentication (JWT)
- Aadhaar/PAN verification
- Post management
- Sale confirmation workflow
- Rewards and notifications
- Admin panel

## API Endpoints
- `/api/auth` — Authentication
- `/api/users` — User management
- `/api/posts` — Post CRUD
- `/api/transactions` — Sale confirmation
- `/api/rewards` — Rewards system
- `/api/notifications` — Notifications
- `/api/admin` — Admin actions

---
