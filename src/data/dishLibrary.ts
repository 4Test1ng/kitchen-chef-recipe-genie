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
  },

  'bobotie': {
    name: 'Bobotie',
    cuisine: 'South African',
    difficulty: 'Medium',
    cookTime: '1 hour',
    servings: 6,
    ingredients: ['ground beef', 'onion', 'curry powder', 'bread', 'milk', 'eggs', 'raisins', 'bay leaves'],
    instructions: [
      'Fry onion until golden',
      'Add ground beef and curry powder, cook until browned',
      'Soak bread in milk, squeeze out excess',
      'Stir bread and raisins into meat mixture',
      'Place in baking dish',
      'Beat eggs with remaining milk',
      'Pour egg mixture over meat',
      'Top with bay leaves and bake at 350°F for 45 minutes until set'
    ],
    description: 'Traditional South African spiced meat casserole with custard topping',
    tags: ['casserole', 'South African', 'spiced', 'comfort food', 'traditional']
  },

  'tagine': {
    name: 'Moroccan Tagine',
    cuisine: 'Moroccan',
    difficulty: 'Medium',
    cookTime: '2 hours',
    servings: 6,
    ingredients: ['lamb or chicken', 'onion', 'garlic', 'ginger', 'saffron', 'dried apricots', 'almonds', 'cinnamon', 'stock'],
    instructions: [
      'Sear meat pieces until browned',
      'Add onions, garlic, and ginger, cook until soft',
      'Add spices including saffron and cinnamon',
      'Add enough stock to cover',
      'Add dried apricots and almonds',
      'Cover and simmer on low heat for 1.5-2 hours until meat is tender',
      'Adjust seasoning and serve with couscous'
    ],
    description: 'Slow-cooked Moroccan stew with meat, dried fruits, and aromatic spices',
    tags: ['stew', 'Moroccan', 'slow-cooked', 'aromatic', 'dried fruits']
  },

  // === EXPANDED ASIAN CUISINE ===
  'chicken biryani': {
    name: 'Chicken Biryani',
    cuisine: 'Indian',
    difficulty: 'Hard',
    cookTime: '1.5 hours',
    servings: 6,
    ingredients: ['basmati rice', 'chicken', 'onions', 'yogurt', 'tomatoes', 'garam masala', 'saffron', 'mint', 'coriander', 'ghee'],
    instructions: [
      'Marinate chicken in yogurt and spices for 30 minutes',
      'Cook chicken with spices until tender',
      'Parboil basmati rice with whole spices',
      'Fry onions until golden and crispy',
      'Layer rice and chicken alternately in pot',
      'Top with fried onions, mint, and saffron soaked in milk',
      'Cover tightly and steam on low heat for 45 minutes',
      'Let rest 10 minutes before serving'
    ],
    description: 'Aromatic Indian rice dish with spiced chicken and fragrant herbs',
    tags: ['rice', 'Indian', 'aromatic', 'layered', 'festive']
  },

  'sushi': {
    name: 'Sushi Rolls',
    cuisine: 'Japanese',
    difficulty: 'Hard',
    cookTime: '45 minutes',
    servings: 4,
    ingredients: ['sushi rice', 'rice vinegar', 'sugar', 'nori sheets', 'raw fish', 'cucumber', 'avocado', 'wasabi', 'soy sauce'],
    instructions: [
      'Cook sushi rice and let cool',
      'Season rice with vinegar, sugar, and salt mixture',
      'Place nori sheet on bamboo mat',
      'Spread rice evenly on nori, leaving border at top',
      'Add fish and vegetables in a line',
      'Roll tightly using bamboo mat',
      'Wet knife and slice into pieces',
      'Serve with wasabi, soy sauce, and pickled ginger'
    ],
    description: 'Traditional Japanese rice rolls with raw fish and vegetables',
    tags: ['rice', 'Japanese', 'raw fish', 'technique-heavy', 'fresh']
  },

  // === EXPANDED EUROPEAN CUISINE ===
  'beef stroganoff': {
    name: 'Beef Stroganoff',
    cuisine: 'Russian',
    difficulty: 'Medium',
    cookTime: '30 minutes',
    servings: 4,
    ingredients: ['beef strips', 'mushrooms', 'onions', 'sour cream', 'mustard', 'beef stock', 'flour', 'butter'],
    instructions: [
      'Season and quickly fry beef strips, remove and set aside',
      'Cook onions until translucent',
      'Add mushrooms and cook until golden',
      'Sprinkle flour and cook for 1 minute',
      'Gradually add beef stock, stirring constantly',
      'Stir in mustard and sour cream',
      'Return beef to pan and simmer briefly',
      'Serve immediately with pasta or rice'
    ],
    description: 'Classic Russian dish with tender beef in creamy mushroom sauce',
    tags: ['beef', 'Russian', 'creamy', 'mushrooms', 'comfort food']
  },

  // === NORTH AMERICAN CUISINE ===
  'buffalo wings': {
    name: 'Buffalo Wings',
    cuisine: 'American',
    difficulty: 'Easy',
    cookTime: '25 minutes',
    servings: 4,
    ingredients: ['chicken wings', 'hot sauce', 'butter', 'garlic', 'cayenne pepper', 'celery', 'blue cheese dressing'],
    instructions: [
      'Preheat oven to 425°F',
      'Season wings with salt and pepper',
      'Bake wings for 20-25 minutes until crispy',
      'Mix hot sauce with melted butter and garlic',
      'Toss cooked wings in sauce mixture',
      'Serve immediately with celery sticks and blue cheese dressing'
    ],
    description: 'Spicy American chicken wings with tangy hot sauce',
    tags: ['chicken', 'American', 'spicy', 'party food', 'wings']
  },

  'poutine': {
    name: 'Poutine',
    cuisine: 'Canadian',
    difficulty: 'Easy',
    cookTime: '15 minutes',
    servings: 4,
    ingredients: ['french fries', 'cheese curds', 'brown gravy', 'beef stock', 'flour', 'butter'],
    instructions: [
      'Prepare crispy french fries',
      'Make gravy with butter, flour, and beef stock',
      'Place hot fries in serving dishes',
      'Top generously with fresh cheese curds',
      'Pour hot gravy over fries and curds',
      'Serve immediately while cheese is melting'
    ],
    description: 'Canadian dish of fries topped with cheese curds and gravy',
    tags: ['fries', 'Canadian', 'comfort food', 'cheese', 'indulgent']
  },

  'mexican tacos': {
    name: 'Authentic Mexican Tacos',
    cuisine: 'Mexican',
    difficulty: 'Easy',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['corn tortillas', 'beef or chicken', 'white onion', 'cilantro', 'lime', 'salsa verde', 'mexican cheese'],
    instructions: [
      'Season and cook meat until tender',
      'Warm corn tortillas on griddle',
      'Dice onions finely',
      'Chop cilantro',
      'Fill tortillas with meat',
      'Top with onions, cilantro, and cheese',
      'Serve with lime wedges and salsa verde'
    ],
    description: 'Traditional Mexican street tacos with simple, fresh ingredients',
    tags: ['tacos', 'Mexican', 'street food', 'authentic', 'fresh']
  },

  // === SOUTH AMERICAN CUISINE ===
  'feijoada': {
    name: 'Feijoada',
    cuisine: 'Brazilian',
    difficulty: 'Hard',
    cookTime: '3 hours',
    servings: 8,
    ingredients: ['black beans', 'pork shoulder', 'sausage', 'bacon', 'onion', 'garlic', 'bay leaves', 'orange zest'],
    instructions: [
      'Soak black beans overnight',
      'Brown pork and sausages',
      'Sauté onions and garlic',
      'Add beans, meats, and bay leaves to pot',
      'Cover with water and simmer for 2-3 hours',
      'Add orange zest in last 30 minutes',
      'Serve with rice, collard greens, and orange slices'
    ],
    description: 'Traditional Brazilian black bean stew with mixed meats',
    tags: ['beans', 'Brazilian', 'stew', 'hearty', 'traditional']
  },

  'empanadas': {
    name: 'Empanadas',
    cuisine: 'Argentine',
    difficulty: 'Medium',
    cookTime: '45 minutes',
    servings: 6,
    ingredients: ['empanada dough', 'ground beef', 'onions', 'hard-boiled eggs', 'olives', 'cumin', 'paprika', 'egg wash'],
    instructions: [
      'Cook onions until golden',
      'Add ground beef and spices, cook until done',
      'Let filling cool, then mix in chopped eggs and olives',
      'Roll out dough and cut into circles',
      'Fill circles with meat mixture',
      'Fold and crimp edges to seal',
      'Brush with egg wash and bake at 375°F for 20-25 minutes'
    ],
    description: 'Argentine pastries filled with seasoned meat and vegetables',
    tags: ['pastry', 'Argentine', 'handheld', 'baked', 'savory']
  },

  'ceviche': {
    name: 'Ceviche',
    cuisine: 'Peruvian',
    difficulty: 'Easy',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['fresh white fish', 'lime juice', 'red onion', 'cilantro', 'aji amarillo', 'sweet potato', 'corn'],
    instructions: [
      'Cut fish into small cubes',
      'Marinate fish in lime juice for 15-20 minutes until opaque',
      'Slice red onion very thinly',
      'Chop cilantro and aji amarillo',
      'Mix fish with onions, herbs, and pepper',
      'Season with salt',
      'Serve with boiled sweet potato and corn'
    ],
    description: 'Peruvian raw fish dish "cooked" in citrus juice',
    tags: ['seafood', 'Peruvian', 'raw', 'citrus', 'fresh']
  },

  // === OCEANIA CUISINE ===
  'meat pie': {
    name: 'Australian Meat Pie',
    cuisine: 'Australian',
    difficulty: 'Medium',
    cookTime: '1 hour',
    servings: 4,
    ingredients: ['ground beef', 'onions', 'beef stock', 'flour', 'puff pastry', 'worcestershire sauce', 'tomato sauce'],
    instructions: [
      'Cook onions until soft',
      'Add ground beef and brown',
      'Sprinkle flour and cook for 1 minute',
      'Add stock and worcestershire sauce',
      'Simmer until thick',
      'Fill pastry cases with meat mixture',
      'Top with pastry, brush with egg',
      'Bake at 400°F for 25-30 minutes until golden'
    ],
    description: 'Classic Australian hand-held pastry filled with seasoned minced meat',
    tags: ['pastry', 'Australian', 'handheld', 'comfort food', 'meat']
  },

  'pavlova': {
    name: 'Pavlova',
    cuisine: 'New Zealand',
    difficulty: 'Hard',
    cookTime: '1.5 hours',
    servings: 8,
    ingredients: ['egg whites', 'caster sugar', 'cornstarch', 'white vinegar', 'whipped cream', 'fresh berries', 'kiwi fruit'],
    instructions: [
      'Beat egg whites until soft peaks form',
      'Gradually add sugar until stiff and glossy',
      'Fold in cornstarch and vinegar',
      'Shape into circle on parchment paper',
      'Bake at 300°F for 1 hour, then cool in oven',
      'Top with whipped cream and fresh fruit',
      'Serve immediately'
    ],
    description: 'Light meringue dessert topped with cream and fresh fruit',
    tags: ['dessert', 'New Zealand', 'meringue', 'fresh fruit', 'elegant']
  },

  'lamingtons': {
    name: 'Lamingtons',
    cuisine: 'Australian',
    difficulty: 'Medium',
    cookTime: '30 minutes',
    servings: 12,
    ingredients: ['sponge cake', 'chocolate icing', 'desiccated coconut', 'butter', 'powdered sugar', 'cocoa powder'],
    instructions: [
      'Cut sponge cake into cubes',
      'Make chocolate icing with butter, powdered sugar, and cocoa',
      'Dip each cake cube in chocolate icing',
      'Roll in desiccated coconut immediately',
      'Place on wire rack to set',
      'Store in airtight container'
    ],
    description: 'Australian sponge cake squares coated in chocolate and coconut',
    tags: ['dessert', 'Australian', 'chocolate', 'coconut', 'sweet']
  },

  // === ANTARCTICA SURVIVAL FOODS ===
  'pemmican': {
    name: 'Pemmican',
    cuisine: 'Polar Survival',
    difficulty: 'Medium',
    cookTime: '2 hours',
    servings: 10,
    ingredients: ['dried meat', 'animal fat', 'dried berries', 'salt'],
    instructions: [
      'Pound dried meat into fine powder',
      'Melt animal fat gently',
      'Mix meat powder with melted fat',
      'Add dried berries and salt',
      'Form into blocks or bars',
      'Let cool and solidify',
      'Store in waterproof containers'
    ],
    description: 'High-energy survival food made from dried meat, fat, and berries',
    tags: ['survival', 'preserved', 'high-energy', 'explorer food', 'traditional']
  },

  'hardtack': {
    name: 'Hardtack',
    cuisine: 'Survival',
    difficulty: 'Easy',
    cookTime: '30 minutes',
    servings: 20,
    ingredients: ['flour', 'water', 'salt'],
    instructions: [
      'Mix flour, water, and salt into stiff dough',
      'Roll dough to 1/2 inch thickness',
      'Cut into 3-inch squares',
      'Poke holes throughout with nail',
      'Bake at 375°F for 30 minutes',
      'Cool completely until very hard',
      'Store in airtight containers'
    ],
    description: 'Long-lasting preserved bread for extreme conditions',
    tags: ['survival', 'preserved', 'simple', 'long-lasting', 'hardtack']
  },

  'bannock': {
    name: 'Bannock Bread',
    cuisine: 'Polar',
    difficulty: 'Easy',
    cookTime: '15 minutes',
    servings: 4,
    ingredients: ['flour', 'baking powder', 'water', 'fat or oil', 'salt'],
    instructions: [
      'Mix flour, baking powder, and salt',
      'Add water and fat to form dough',
      'Knead briefly until smooth',
      'Shape into flat round',
      'Cook on hot pan or griddle',
      'Flip when bottom is golden brown',
      'Cook until both sides are done'
    ],
    description: 'Simple flat bread that can be cooked on a pan in harsh conditions',
    tags: ['bread', 'polar', 'simple', 'quick', 'survival']
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