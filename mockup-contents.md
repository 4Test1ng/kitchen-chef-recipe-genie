# Mockup Content Data

## Sample Users
```json
{
  "users": [
    {
      "id": 1,
      "email": "admin@aichef.com",
      "first_name": "Admin",
      "last_name": "User",
      "role": "admin",
      "is_active": true,
      "email_verified": true,
      "created_at": "2024-01-01T10:00:00Z"
    },
    {
      "id": 2,
      "email": "john.doe@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "role": "user",
      "is_active": true,
      "email_verified": true,
      "created_at": "2024-01-15T14:30:00Z"
    },
    {
      "id": 3,
      "email": "jane.smith@example.com",
      "first_name": "Jane",
      "last_name": "Smith",
      "role": "user",
      "is_active": true,
      "email_verified": false,
      "created_at": "2024-02-01T09:15:00Z"
    }
  ]
}
```

## Sample Continental Dishes
```json
{
  "dishes": [
    {
      "id": 1,
      "name": "Pasta Carbonara",
      "continent": "Europe",
      "country": "Italy",
      "description": "Classic Italian pasta dish with eggs, cheese, and pancetta",
      "ingredients": "Spaghetti, eggs, pecorino romano cheese, pancetta, black pepper",
      "instructions": "1. Cook pasta until al dente\n2. Fry pancetta until crispy\n3. Mix eggs and cheese\n4. Combine all ingredients",
      "prep_time_minutes": 15,
      "cook_time_minutes": 20,
      "servings": 4,
      "difficulty": "Medium",
      "tags": ["Italian", "Pasta", "Traditional"],
      "is_featured": true,
      "is_active": true
    },
    {
      "id": 2,
      "name": "Pad Thai",
      "continent": "Asia",
      "country": "Thailand",
      "description": "Popular Thai stir-fried noodle dish",
      "ingredients": "Rice noodles, shrimp, tofu, bean sprouts, eggs, tamarind paste, fish sauce",
      "instructions": "1. Soak rice noodles\n2. Prepare sauce\n3. Stir-fry ingredients\n4. Combine and serve",
      "prep_time_minutes": 20,
      "cook_time_minutes": 15,
      "servings": 4,
      "difficulty": "Medium",
      "tags": ["Thai", "Stir-fry", "Spicy"],
      "is_featured": true,
      "is_active": true
    },
    {
      "id": 3,
      "name": "Beef Tacos",
      "continent": "North America",
      "country": "Mexico",
      "description": "Traditional Mexican tacos with seasoned beef",
      "ingredients": "Ground beef, corn tortillas, onion, cilantro, lime, salsa",
      "instructions": "1. Season and cook beef\n2. Warm tortillas\n3. Assemble tacos\n4. Serve with lime",
      "prep_time_minutes": 10,
      "cook_time_minutes": 15,
      "servings": 6,
      "difficulty": "Easy",
      "tags": ["Mexican", "Beef", "Quick"],
      "is_featured": false,
      "is_active": true
    }
  ]
}
```

## Sample Generated Recipes
```json
{
  "generated_recipes": [
    {
      "id": 1,
      "user_id": 2,
      "name": "Creamy Mushroom Risotto",
      "description": "AI-generated risotto recipe based on available ingredients",
      "ingredients": [
        {"name": "Arborio rice", "amount": "1", "unit": "cup"},
        {"name": "Mushrooms", "amount": "200", "unit": "g"},
        {"name": "Chicken broth", "amount": "4", "unit": "cups"},
        {"name": "Onion", "amount": "1", "unit": "piece"},
        {"name": "Parmesan cheese", "amount": "50", "unit": "g"}
      ],
      "instructions": [
        "Heat broth in a separate pan",
        "Sauté onions until translucent",
        "Add rice and stir for 2 minutes",
        "Add broth gradually while stirring",
        "Cook until creamy consistency"
      ],
      "prep_time_minutes": 10,
      "cook_time_minutes": 25,
      "servings": 4,
      "difficulty": "Medium",
      "cuisine_type": "Italian",
      "generation_method": "ingredients",
      "is_favorite": true,
      "created_at": "2024-02-15T16:20:00Z"
    },
    {
      "id": 2,
      "user_id": 3,
      "name": "Asian Fusion Stir-fry",
      "description": "Quick and healthy vegetable stir-fry",
      "ingredients": [
        {"name": "Mixed vegetables", "amount": "300", "unit": "g"},
        {"name": "Soy sauce", "amount": "3", "unit": "tbsp"},
        {"name": "Garlic", "amount": "3", "unit": "cloves"},
        {"name": "Ginger", "amount": "1", "unit": "inch"},
        {"name": "Sesame oil", "amount": "1", "unit": "tsp"}
      ],
      "instructions": [
        "Heat oil in wok",
        "Add garlic and ginger",
        "Stir-fry vegetables",
        "Add sauce and toss",
        "Serve hot over rice"
      ],
      "prep_time_minutes": 15,
      "cook_time_minutes": 10,
      "servings": 2,
      "difficulty": "Easy",
      "cuisine_type": "Asian",
      "generation_method": "ingredients",
      "is_favorite": false,
      "created_at": "2024-02-20T11:45:00Z"
    }
  ]
}
```

## Sample Analytics Data
```json
{
  "analytics": {
    "total_users": 150,
    "active_users": 125,
    "total_recipes_generated": 1250,
    "total_dishes": 85,
    "popular_cuisines": [
      {"name": "Italian", "count": 245},
      {"name": "Asian", "count": 198},
      {"name": "Mexican", "count": 167},
      {"name": "French", "count": 134},
      {"name": "Indian", "count": 121}
    ],
    "monthly_growth": {
      "users": 12.5,
      "recipes": 28.3,
      "engagement": 15.7
    }
  }
}
```

## Authentication Mock Data
```json
{
  "current_user": {
    "id": 1,
    "email": "admin@aichef.com",
    "first_name": "Admin",
    "last_name": "User",
    "role": "admin",
    "is_authenticated": true
  }
}
```