export interface DishData {
  name: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  description?: string;
  tags: string[];
}

export const CONTINENTAL_DISHES: Record<string, DishData> = {
  // === ITALIAN CUISINE ===
  'spaghetti carbonara': {
    name: 'Spaghetti Carbonara',
    cuisine: 'Italian',
    difficulty: 'Medium',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['spaghetti', 'eggs', 'pancetta', 'pecorino romano cheese', 'black pepper', 'salt'],
    instructions: [
      'Boil spaghetti in salted water until al dente',
      'Cook pancetta until crispy',
      'Whisk eggs with grated cheese and black pepper',
      'Combine hot pasta with pancetta',
      'Remove from heat and quickly mix in egg mixture',
      'Toss continuously until creamy (do not scramble eggs)',
      'Serve immediately with extra cheese and pepper'
    ],
    description: 'Classic Roman pasta dish with eggs, cheese, and pancetta',
    tags: ['pasta', 'quick', 'Italian', 'comfort food']
  },

  'margherita pizza': {
    name: 'Margherita Pizza',
    cuisine: 'Italian',
    difficulty: 'Medium',
    cookTime: '25 minutes',
    servings: 2,
    ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'fresh basil', 'olive oil', 'salt'],
    instructions: [
      'Preheat oven to 475°F (245°C)',
      'Roll out pizza dough on floured surface',
      'Spread thin layer of tomato sauce',
      'Add torn mozzarella cheese evenly',
      'Drizzle with olive oil and sprinkle salt',
      'Bake for 12-15 minutes until crust is golden',
      'Top with fresh basil leaves before serving'
    ],
    description: 'Traditional Neapolitan pizza with tomato, mozzarella, and basil',
    tags: ['pizza', 'Italian', 'vegetarian', 'classic']
  },

  'chicken parmesan': {
    name: 'Chicken Parmesan',
    cuisine: 'Italian-American',
    difficulty: 'Medium',
    cookTime: '35 minutes',
    servings: 4,
    ingredients: ['chicken breasts', 'breadcrumbs', 'parmesan cheese', 'marinara sauce', 'mozzarella cheese', 'eggs', 'flour'],
    instructions: [
      'Pound chicken breasts to even thickness',
      'Set up breading station: flour, beaten eggs, breadcrumb-parmesan mix',
      'Bread chicken pieces thoroughly',
      'Pan-fry chicken until golden brown on both sides',
      'Top with marinara sauce and mozzarella',
      'Bake at 375°F until cheese melts and chicken is cooked through',
      'Serve with pasta or salad'
    ],
    description: 'Breaded chicken breast topped with marinara sauce and cheese',
    tags: ['chicken', 'Italian-American', 'comfort food', 'family dinner']
  },

  'risotto': {
    name: 'Classic Risotto',
    cuisine: 'Italian',
    difficulty: 'Hard',
    cookTime: '30 minutes',
    servings: 4,
    ingredients: ['arborio rice', 'white wine', 'chicken broth', 'onion', 'parmesan cheese', 'butter', 'olive oil'],
    instructions: [
      'Heat broth and keep warm',
      'Sauté diced onion in olive oil until translucent',
      'Add rice and toast for 2 minutes',
      'Pour in wine and stir until absorbed',
      'Add warm broth one ladle at a time, stirring constantly',
      'Continue until rice is creamy and al dente (18-20 minutes)',
      'Stir in butter and parmesan cheese',
      'Season and serve immediately'
    ],
    description: 'Creamy Italian rice dish cooked slowly with broth',
    tags: ['rice', 'Italian', 'vegetarian', 'comfort food', 'technique-heavy']
  },

  // === ASIAN CUISINES ===
  'chicken fried rice': {
    name: 'Chicken Fried Rice',
    cuisine: 'Chinese',
    difficulty: 'Easy',
    cookTime: '15 minutes',
    servings: 4,
    ingredients: ['cooked rice', 'chicken breast', 'eggs', 'soy sauce', 'mixed vegetables', 'garlic', 'ginger', 'sesame oil'],
    instructions: [
      'Cook and dice chicken breast',
      'Scramble eggs and set aside',
      'Heat oil in wok or large pan',
      'Stir-fry garlic and ginger until fragrant',
      'Add chicken and vegetables, stir-fry 3 minutes',
      'Add cold cooked rice, breaking up clumps',
      'Add soy sauce and sesame oil',
      'Fold in scrambled eggs and serve hot'
    ],
    description: 'Classic Chinese stir-fried rice with chicken and vegetables',
    tags: ['rice', 'Chinese', 'quick', 'one-pan', 'comfort food']
  },

  'pad thai': {
    name: 'Pad Thai',
    cuisine: 'Thai',
    difficulty: 'Medium',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['rice noodles', 'shrimp', 'eggs', 'bean sprouts', 'peanuts', 'lime', 'fish sauce', 'tamarind paste', 'palm sugar'],
    instructions: [
      'Soak rice noodles in warm water until soft',
      'Make sauce by mixing fish sauce, tamarind paste, and palm sugar',
      'Heat oil in wok, scramble eggs and set aside',
      'Stir-fry shrimp until pink',
      'Add drained noodles and sauce',
      'Toss with bean sprouts and eggs',
      'Garnish with peanuts, lime wedges, and herbs',
      'Serve immediately'
    ],
    description: 'Thailand\'s national dish - sweet and tangy stir-fried noodles',
    tags: ['noodles', 'Thai', 'seafood', 'sweet and sour', 'street food']
  },

  'ramen': {
    name: 'Authentic Ramen',
    cuisine: 'Japanese',
    difficulty: 'Hard',
    cookTime: '45 minutes',
    servings: 2,
    ingredients: ['ramen noodles', 'pork belly', 'eggs', 'green onions', 'nori', 'miso paste', 'chicken broth', 'garlic', 'ginger'],
    instructions: [
      'Prepare soft-boiled eggs and marinate in soy sauce',
      'Cook pork belly until tender and slice',
      'Make broth by simmering chicken stock with miso, garlic, and ginger',
      'Cook ramen noodles according to package instructions',
      'Heat serving bowls',
      'Assemble: noodles in bowls, pour hot broth over',
      'Top with pork, halved eggs, green onions, and nori',
      'Serve immediately with chopsticks'
    ],
    description: 'Japanese noodle soup with rich broth and various toppings',
    tags: ['noodles', 'Japanese', 'soup', 'comfort food', 'umami']
  },

  'bibimbap': {
    name: 'Bibimbap',
    cuisine: 'Korean',
    difficulty: 'Medium',
    cookTime: '30 minutes',
    servings: 4,
    ingredients: ['rice', 'mixed vegetables', 'beef', 'eggs', 'gochujang', 'sesame oil', 'soy sauce', 'garlic'],
    instructions: [
      'Cook rice and keep warm',
      'Marinate and cook beef strips',
      'Prepare seasoned vegetables (spinach, carrots, bean sprouts)',
      'Fry eggs sunny-side up',
      'Heat bowls and add rice as base',
      'Arrange vegetables and beef in sections on rice',
      'Top with fried egg',
      'Serve with gochujang and sesame oil on the side',
      'Mix everything together before eating'
    ],
    description: 'Korean mixed rice bowl with vegetables, meat, and egg',
    tags: ['rice', 'Korean', 'healthy', 'colorful', 'balanced meal']
  },

  'butter chicken': {
    name: 'Butter Chicken',
    cuisine: 'Indian',
    difficulty: 'Medium',
    cookTime: '40 minutes',
    servings: 4,
    ingredients: ['chicken', 'tomatoes', 'cream', 'butter', 'onions', 'garam masala', 'ginger-garlic paste', 'yogurt'],
    instructions: [
      'Marinate chicken in yogurt and spices for 30 minutes',
      'Cook marinated chicken until done, set aside',
      'Sauté onions until golden',
      'Add ginger-garlic paste and spices',
      'Add tomatoes and cook until soft',
      'Blend mixture into smooth sauce',
      'Return to pan, add cream and butter',
      'Add cooked chicken and simmer 10 minutes',
      'Garnish with cream and serve with rice or naan'
    ],
    description: 'Creamy Indian curry with tender chicken in tomato-based sauce',
    tags: ['curry', 'Indian', 'creamy', 'spiced', 'comfort food']
  },

  // === MEXICAN CUISINE ===
  'chicken tacos': {
    name: 'Chicken Tacos',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['chicken breast', 'corn tortillas', 'lettuce', 'tomatoes', 'cheese', 'lime', 'cumin', 'chili powder'],
    instructions: [
      'Season chicken with cumin, chili powder, salt',
      'Cook chicken until done, then slice',
      'Warm tortillas in dry pan',
      'Dice tomatoes and shred lettuce',
      'Assemble tacos: tortilla, chicken, vegetables, cheese',
      'Squeeze lime over filling',
      'Serve with salsa and hot sauce'
    ],
    description: 'Traditional Mexican tacos with seasoned chicken and fresh toppings',
    tags: ['tacos', 'Mexican', 'quick', 'handheld', 'customizable']
  },

  'guacamole': {
    name: 'Fresh Guacamole',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    cookTime: '10 minutes',
    servings: 4,
    ingredients: ['avocados', 'lime juice', 'onion', 'tomato', 'cilantro', 'jalapeño', 'salt', 'garlic'],
    instructions: [
      'Halve and pit ripe avocados',
      'Mash avocados in bowl with fork',
      'Add lime juice immediately to prevent browning',
      'Finely dice onion, tomato, and jalapeño',
      'Mince garlic and chop cilantro',
      'Mix all ingredients together',
      'Season with salt to taste',
      'Serve immediately with tortilla chips'
    ],
    description: 'Fresh Mexican avocado dip with lime and cilantro',
    tags: ['dip', 'Mexican', 'vegetarian', 'fresh', 'party food']
  },

  // === FRENCH CUISINE ===
  'coq au vin': {
    name: 'Coq au Vin',
    cuisine: 'French',
    difficulty: 'Hard',
    cookTime: '2 hours',
    servings: 6,
    ingredients: ['chicken', 'red wine', 'bacon', 'mushrooms', 'onions', 'carrots', 'thyme', 'bay leaves'],
    instructions: [
      'Brown chicken pieces and set aside',
      'Cook bacon until crispy, remove',
      'Sauté vegetables in bacon fat',
      'Return chicken to pot',
      'Add wine, herbs, and seasonings',
      'Bring to boil, then simmer covered 1.5 hours',
      'Add mushrooms in last 30 minutes',
      'Thicken sauce if desired',
      'Serve with crusty bread or potatoes'
    ],
    description: 'Classic French chicken braised in red wine',
    tags: ['chicken', 'French', 'braised', 'wine', 'elegant']
  },

  'french onion soup': {
    name: 'French Onion Soup',
    cuisine: 'French',
    difficulty: 'Medium',
    cookTime: '1 hour',
    servings: 4,
    ingredients: ['onions', 'beef broth', 'white wine', 'gruyere cheese', 'bread', 'butter', 'thyme'],
    instructions: [
      'Slice onions thinly',
      'Cook onions in butter very slowly until caramelized (45 minutes)',
      'Add wine and scrape up browned bits',
      'Add broth and thyme, simmer 20 minutes',
      'Toast bread slices',
      'Ladle soup into oven-safe bowls',
      'Top with bread and grated cheese',
      'Broil until cheese bubbles and browns'
    ],
    description: 'Traditional French soup with caramelized onions and melted cheese',
    tags: ['soup', 'French', 'cheese', 'comfort food', 'classic']
  },

  // === AMERICAN CLASSICS ===
  'mac and cheese': {
    name: 'Mac and Cheese',
    cuisine: 'American',
    difficulty: 'Easy',
    cookTime: '25 minutes',
    servings: 6,
    ingredients: ['elbow macaroni', 'cheddar cheese', 'milk', 'butter', 'flour', 'breadcrumbs', 'salt', 'pepper'],
    instructions: [
      'Cook macaroni according to package directions',
      'Make roux with butter and flour',
      'Gradually add milk, whisking constantly',
      'Add grated cheese and stir until melted',
      'Season with salt and pepper',
      'Mix sauce with drained pasta',
      'Top with breadcrumbs if desired',
      'Bake until golden (optional)'
    ],
    description: 'Classic American comfort food with cheese sauce',
    tags: ['pasta', 'American', 'comfort food', 'kid-friendly', 'cheese']
  },

  'grilled cheese': {
    name: 'Grilled Cheese Sandwich',
    cuisine: 'American',
    difficulty: 'Easy',
    cookTime: '10 minutes',
    servings: 1,
    ingredients: ['bread', 'cheese', 'butter'],
    instructions: [
      'Butter one side of each bread slice',
      'Place cheese between bread, buttered sides out',
      'Heat pan over medium heat',
      'Cook sandwich until golden brown on bottom',
      'Flip and cook until other side is golden',
      'Cheese should be melted',
      'Cut diagonally and serve hot'
    ],
    description: 'Simple American sandwich with melted cheese',
    tags: ['sandwich', 'American', 'quick', 'kid-friendly', 'comfort food']
  },

  // === GERMAN CUISINE ===
  'schnitzel': {
    name: 'Wiener Schnitzel',
    cuisine: 'German',
    difficulty: 'Medium',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['veal cutlets', 'flour', 'eggs', 'breadcrumbs', 'lemon', 'oil', 'salt', 'pepper'],
    instructions: [
      'Pound cutlets to 1/4 inch thickness',
      'Season with salt and pepper',
      'Set up breading station: flour, beaten eggs, breadcrumbs',
      'Bread cutlets thoroughly',
      'Heat oil in large pan',
      'Fry schnitzels until golden brown on both sides',
      'Drain on paper towels',
      'Serve immediately with lemon wedges'
    ],
    description: 'Traditional Austrian/German breaded veal cutlet',
    tags: ['meat', 'German', 'fried', 'crispy', 'classic']
  },

  // === SPANISH CUISINE ===
  'paella': {
    name: 'Paella Valenciana',
    cuisine: 'Spanish',
    difficulty: 'Hard',
    cookTime: '45 minutes',
    servings: 6,
    ingredients: ['bomba rice', 'chicken', 'rabbit', 'green beans', 'saffron', 'tomato', 'olive oil', 'stock'],
    instructions: [
      'Heat olive oil in paella pan',
      'Brown chicken and rabbit pieces',
      'Add green beans and tomato',
      'Add rice and distribute evenly',
      'Add hot saffron stock',
      'Do not stir after adding stock',
      'Cook over high heat, then reduce',
      'Let rest 5 minutes before serving'
    ],
    description: 'Traditional Spanish rice dish from Valencia',
    tags: ['rice', 'Spanish', 'saffron', 'traditional', 'one-pan']
  },

  // === GREEK CUISINE ===
  'moussaka': {
    name: 'Moussaka',
    cuisine: 'Greek',
    difficulty: 'Hard',
    cookTime: '2 hours',
    servings: 8,
    ingredients: ['eggplant', 'ground lamb', 'tomatoes', 'onions', 'béchamel sauce', 'cheese', 'olive oil', 'herbs'],
    instructions: [
      'Slice and salt eggplant, let drain 30 minutes',
      'Fry eggplant slices until golden',
      'Cook lamb with onions and tomatoes',
      'Season meat mixture with herbs',
      'Layer eggplant and meat in baking dish',
      'Top with béchamel sauce and cheese',
      'Bake at 375°F for 45 minutes until golden',
      'Let cool 15 minutes before serving'
    ],
    description: 'Traditional Greek layered casserole with eggplant and meat',
    tags: ['casserole', 'Greek', 'layered', 'comfort food', 'traditional']
  },

  // === MIDDLE EASTERN ===
  'hummus': {
    name: 'Classic Hummus',
    cuisine: 'Middle Eastern',
    difficulty: 'Easy',
    cookTime: '15 minutes',
    servings: 6,
    ingredients: ['chickpeas', 'tahini', 'lemon juice', 'garlic', 'olive oil', 'cumin', 'paprika', 'salt'],
    instructions: [
      'Drain and rinse chickpeas (save liquid)',
      'Blend garlic and lemon juice first',
      'Add tahini and blend',
      'Add chickpeas gradually while blending',
      'Add reserved liquid as needed for consistency',
      'Season with salt and cumin',
      'Serve drizzled with olive oil and paprika',
      'Garnish with whole chickpeas if desired'
    ],
    description: 'Creamy Middle Eastern chickpea dip',
    tags: ['dip', 'Middle Eastern', 'vegetarian', 'healthy', 'protein']
  },

  // === AFRICAN CUISINE ===
  'jollof rice': {
    name: 'Jollof Rice',
    cuisine: 'West African',
    difficulty: 'Medium',
    cookTime: '45 minutes',
    servings: 6,
    ingredients: ['rice', 'tomatoes', 'onions', 'chicken stock', 'scotch bonnet pepper', 'bay leaves', 'thyme', 'oil'],
    instructions: [
      'Blend tomatoes with onions and pepper',
      'Fry tomato mixture until thick and deep red',
      'Add rice and stir to coat',
      'Add hot stock gradually',
      'Add bay leaves and thyme',
      'Cover and simmer until rice is tender',
      'Adjust seasoning',
      'Let rest 10 minutes before serving'
    ],
    description: 'Popular West African one-pot rice dish',
    tags: ['rice', 'African', 'one-pot', 'spicy', 'tomato-based']
  }
};

// Function to search dishes by name with fuzzy matching
export const searchDishes = (query: string): DishData[] => {
  if (!query.trim()) return [];
  
  const queryLower = query.toLowerCase();
  const results: DishData[] = [];
  
  // Exact matches first
  for (const [key, dish] of Object.entries(CONTINENTAL_DISHES)) {
    if (key === queryLower || dish.name.toLowerCase() === queryLower) {
      results.push(dish);
    }
  }
  
  // Partial matches
  for (const [key, dish] of Object.entries(CONTINENTAL_DISHES)) {
    if (key.includes(queryLower) || dish.name.toLowerCase().includes(queryLower)) {
      if (!results.some(r => r.name === dish.name)) {
        results.push(dish);
      }
    }
  }
  
  // Cuisine matches
  for (const dish of Object.values(CONTINENTAL_DISHES)) {
    if (dish.cuisine.toLowerCase().includes(queryLower)) {
      if (!results.some(r => r.name === dish.name)) {
        results.push(dish);
      }
    }
  }
  
  return results.slice(0, 10); // Limit results
};

// Function to get dish suggestions for autocomplete
export const getDishSuggestions = (): string[] => {
  return Object.values(CONTINENTAL_DISHES).map(dish => dish.name).sort();
};