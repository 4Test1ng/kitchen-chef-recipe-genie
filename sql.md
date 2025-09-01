# Database Structure Documentation

## Database Schema for AiChef Application

### Core Tables

#### 1. users
```sql
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
```

#### 2. dishes
```sql
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
    tags JSON,
    nutrition_info JSON,
    is_featured BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);
```

#### 3. generated_recipes
```sql
CREATE TABLE generated_recipes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    ingredients JSON NOT NULL,
    instructions JSON NOT NULL,
    prep_time_minutes INT,
    cook_time_minutes INT,
    servings INT DEFAULT 4,
    difficulty ENUM('Easy', 'Medium', 'Hard'),
    cuisine_type VARCHAR(100),
    dietary_tags JSON,
    nutrition_info JSON,
    generation_method ENUM('ingredients', 'dish_name') NOT NULL,
    input_data JSON,
    ai_model_version VARCHAR(50),
    quality_score DECIMAL(3,2),
    is_favorite BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

#### 4. user_favorites
```sql
CREATE TABLE user_favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    recipe_type ENUM('generated', 'dish') NOT NULL,
    recipe_id INT NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_favorite (user_id, recipe_type, recipe_id)
);
```

#### 5. recipe_feedback
```sql
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
```

### Performance Indexes
```sql
CREATE INDEX idx_dishes_continent ON dishes(continent);
CREATE INDEX idx_dishes_active ON dishes(is_active);
CREATE INDEX idx_dishes_featured ON dishes(is_featured);
CREATE INDEX idx_generated_recipes_user ON generated_recipes(user_id);
CREATE INDEX idx_generated_recipes_date ON generated_recipes(created_at);
CREATE INDEX idx_user_favorites_user ON user_favorites(user_id);
CREATE INDEX idx_recipe_feedback_recipe ON recipe_feedback(recipe_type, recipe_id);
```

### API Endpoints Structure

#### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout
- GET /api/auth/me

#### Admin Endpoints
- GET /api/admin/users
- PUT /api/admin/users/:id
- DELETE /api/admin/users/:id
- GET /api/admin/dishes
- POST /api/admin/dishes
- PUT /api/admin/dishes/:id
- DELETE /api/admin/dishes/:id
- GET /api/admin/analytics

#### User Endpoints
- GET /api/user/recipes
- POST /api/user/recipes
- PUT /api/user/recipes/:id
- DELETE /api/user/recipes/:id
- GET /api/user/favorites
- POST /api/user/favorites
- DELETE /api/user/favorites/:id