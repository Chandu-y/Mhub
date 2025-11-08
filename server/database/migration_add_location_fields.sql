-- Migration: Add permission_status, city, and country to user_locations table
-- Date: 2025-11-08
-- Description: Complete the location detection feature with permission tracking and geocoding

-- Add new columns to user_locations table
ALTER TABLE user_locations 
ADD COLUMN IF NOT EXISTS permission_status VARCHAR(20) DEFAULT 'granted',
ADD COLUMN IF NOT EXISTS city VARCHAR(100),
ADD COLUMN IF NOT EXISTS country VARCHAR(100);

-- Add index for faster queries on permission_status
CREATE INDEX IF NOT EXISTS idx_user_locations_permission_status ON user_locations(permission_status);

-- Update existing records to have 'granted' status (since they were able to save location)
UPDATE user_locations SET permission_status = 'granted' WHERE permission_status IS NULL;

-- Add comments to columns
COMMENT ON COLUMN user_locations.permission_status IS 'User location permission status: granted, denied, prompt';
COMMENT ON COLUMN user_locations.city IS 'City name derived from reverse geocoding';
COMMENT ON COLUMN user_locations.country IS 'Country name derived from reverse geocoding';      
