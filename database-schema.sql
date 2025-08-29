-- AiChef Database Schema for XAMPP MySQL
-- Run this in your phpMyAdmin or MySQL command line

CREATE DATABASE IF NOT EXISTS aichef_db;
USE aichef_db;

-- Users table for authentication and user management
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role ENUM('user', 'admin') DEFAULT 'user',
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    profile_image_url VARCHAR(500),
    preferences JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Dish library table for managing continental dishes
CREATE TABLE dishes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    continent ENUM('Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica') NOT NULL,
    country VARCHAR(100),
    description TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    prep_time_minutes INT,
    cook_time_minutes INT,
    servings INT DEFAULT 4,
    difficulty ENUM('Easy', 'Medium', 'Hard') DEFAULT 'Medium',
    image_url VARCHAR(500),
    tags JSON, -- ["vegetarian", "gluten-free", "spicy"] etc.
    nutrition_info JSON, -- calories, protein, carbs, fat, etc.
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Generated recipes table for AI-created recipes
CREATE TABLE generated_recipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    ingredients JSON NOT NULL, -- [{"name": "tomato", "amount": "2", "unit": "pieces"}]
    instructions JSON NOT NULL, -- ["step 1", "step 2", "step 3"]
    prep_time_minutes INT,
    cook_time_minutes INT,
    servings INT DEFAULT 4,
    difficulty ENUM('Easy', 'Medium', 'Hard'),
    cuisine_type VARCHAR(100),
    dietary_tags JSON, -- ["vegetarian", "gluten-free"] etc.
    nutrition_info JSON,
    generation_method ENUM('ingredients', 'dish_name') NOT NULL,
    input_data JSON, -- original ingredients or dish name used for generation
    ai_model_version VARCHAR(50),
    quality_score DECIMAL(3,2), -- 0.00 to 5.00
    is_favorite BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User favorites table for saving recipes
CREATE TABLE user_favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    recipe_type ENUM('generated', 'dish') NOT NULL,
    recipe_id INT NOT NULL, -- references either generated_recipes.id or dishes.id
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_favorite (user_id, recipe_type, recipe_id)
);

-- Recipe ratings and feedback
CREATE TABLE recipe_feedback (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    recipe_type ENUM('generated', 'dish') NOT NULL,
    recipe_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    feedback_text TEXT,
    improvement_suggestions TEXT,
    would_make_again BOOLEAN,
    difficulty_rating ENUM('Too Easy', 'Just Right', 'Too Hard'),
    taste_rating INT CHECK (taste_rating >= 1 AND taste_rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Search history for user behavior tracking
CREATE TABLE search_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    search_type ENUM('ingredients', 'dish_name') NOT NULL,
    search_query JSON NOT NULL, -- ingredients array or dish name string
    result_count INT DEFAULT 0,
    selected_recipe_id INT,
    session_id VARCHAR(100),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Content management for admin
CREATE TABLE content_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value JSON NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    updated_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Admin activity log
CREATE TABLE admin_activity_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    admin_user_id INT NOT NULL,
    action_type ENUM('CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'SETTINGS_CHANGE') NOT NULL,
    target_table VARCHAR(50),
    target_id INT,
    changes_made JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Indexes for better performance
CREATE INDEX idx_dishes_continent ON dishes(continent);
CREATE INDEX idx_dishes_active ON dishes(is_active);
CREATE INDEX idx_dishes_featured ON dishes(is_featured);
CREATE INDEX idx_generated_recipes_user ON generated_recipes(user_id);
CREATE INDEX idx_generated_recipes_date ON generated_recipes(created_at);
CREATE INDEX idx_user_favorites_user ON user_favorites(user_id);
CREATE INDEX idx_recipe_feedback_recipe ON recipe_feedback(recipe_type, recipe_id);
CREATE INDEX idx_search_history_user ON search_history(user_id);
CREATE INDEX idx_search_history_date ON search_history(created_at);

-- Insert sample admin user (password: admin123 - hash this in production!)
INSERT INTO users (email, password_hash, first_name, last_name, role, email_verified) 
VALUES ('admin@aichef.com', '$2y$10$example_hash_here', 'Admin', 'User', 'admin', TRUE);

-- Insert sample content settings
INSERT INTO content_settings (setting_key, setting_value, description) VALUES
('site_title', '"AiChef - AI-Powered Recipe Generator"', 'Main site title'),
('hero_title', '"Transform Your Kitchen with AI"', 'Landing page hero title'),
('hero_description', '"Turn your ingredients into delicious recipes instantly"', 'Landing page hero description'),
('featured_cuisines', '["Italian", "Japanese", "Mexican", "Indian", "French"]', 'Featured cuisine types'),
('max_ingredients', '20', 'Maximum ingredients allowed per recipe generation'),
('default_servings', '4', 'Default number of servings for recipes');

-- Sample queries for common operations:

-- Get all active dishes by continent
-- SELECT * FROM dishes WHERE continent = 'Asia' AND is_active = TRUE ORDER BY name;

-- Get user's favorite recipes
-- SELECT gf.*, gr.name, gr.description FROM user_favorites uf
-- JOIN generated_recipes gr ON uf.recipe_id = gr.id 
-- WHERE uf.user_id = ? AND uf.recipe_type = 'generated';

-- Get recipe statistics
-- SELECT 
--   COUNT(*) as total_recipes,
--   AVG(rating) as avg_rating,
--   COUNT(CASE WHEN would_make_again = TRUE THEN 1 END) as would_make_again_count
-- FROM recipe_feedback 
-- WHERE recipe_type = 'generated' AND recipe_id = ?;