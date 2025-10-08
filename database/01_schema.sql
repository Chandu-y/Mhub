-- 01_schema.sql
-- This script creates the database schema for the application.

-- Users Table: Stores user information
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table: Stores different post categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- Tiers Table: Stores different pricing tiers for posts
CREATE TABLE tiers (
    tier_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    description TEXT
);

-- Posts Table: Stores user-created posts
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    category_id INT REFERENCES categories(category_id),
    tier_id INT REFERENCES tiers(tier_id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'active', -- e.g., 'active', 'sold', 'expired'
    latitude NUMERIC(9, 6),
    longitude NUMERIC(9, 6),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sales Table: Tracks the sale of each post
CREATE TABLE sales (
    sale_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(post_id),
    buyer_id INT REFERENCES users(user_id),
    sale_status VARCHAR(20) NOT NULL, -- e.g., 'pending', 'completed', 'cancelled'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Sale Transitions Table: Logs changes in sale status
CREATE TABLE sale_transitions (
    transition_id SERIAL PRIMARY KEY,
    sale_id INT REFERENCES sales(sale_id),
    old_status VARCHAR(20),
    new_status VARCHAR(20),
    changed_by INT REFERENCES users(user_id),
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups on foreign keys
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_category_id ON posts(category_id);
CREATE INDEX idx_sales_post_id ON sales(post_id);
CREATE INDEX idx_sales_buyer_id ON sales(buyer_id);
CREATE INDEX idx_sale_transitions_sale_id ON sale_transitions(sale_id);