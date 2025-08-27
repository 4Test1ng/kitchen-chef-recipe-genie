import { DishData } from '@/data/dishLibrary';
import { Recipe } from '@/types/recipe';

export interface OnlineRecipeResult {
  title: string;
  ingredients: string[];
  instructions: string[];
  cookTime?: string;
  servings?: number;
  source?: string;
  url?: string;
}

// Simulate online recipe search (in a real app, this would call a recipe API)
export const searchRecipeOnline = async (dishName: string): Promise<OnlineRecipeResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock results based on dish name
  const mockResults: Record<string, OnlineRecipeResult[]> = {
    'chicken tikka masala': [
      {
        title: 'Authentic Chicken Tikka Masala',
        ingredients: [
          'chicken breast', 'yogurt', 'garam masala', 'tomatoes', 
          'cream', 'onions', 'garlic', 'ginger', 'cumin', 'paprika'
        ],
        instructions: [
          'Marinate chicken in yogurt and spices for 2 hours',
          'Grill chicken until charred and cooked through',
          'Make sauce with tomatoes, cream, and spices',
          'Combine chicken with sauce and simmer',
          'Serve with basmati rice and naan bread'
        ],
        cookTime: '45 minutes',
        servings: 4,
        source: 'IndianCooking.com',
        url: 'https://example.com/chicken-tikka-masala'
      },
      {
        title: 'Easy Chicken Tikka Masala',
        ingredients: [
          'chicken thighs', 'coconut milk', 'curry powder', 
          'canned tomatoes', 'onion', 'garlic', 'ginger'
        ],
        instructions: [
          'Season and cook chicken thighs',
          'Sauté onion, garlic, and ginger',
          'Add curry powder and cook 1 minute',
          'Add tomatoes and coconut milk',
          'Add chicken back and simmer 15 minutes',
          'Serve over rice'
        ],
        cookTime: '30 minutes',
        servings: 4,
        source: 'QuickMeals.com',
        url: 'https://example.com/easy-tikka-masala'
      }
    ],
    'beef wellington': [
      {
        title: 'Classic Beef Wellington',
        ingredients: [
          'beef tenderloin', 'puff pastry', 'mushrooms', 'prosciutto',
          'pâté', 'egg wash', 'shallots', 'herbs'
        ],
        instructions: [
          'Sear beef tenderloin on all sides',
          'Make mushroom duxelles',
          'Wrap beef in prosciutto and pâté',
          'Encase in puff pastry',
          'Brush with egg wash',
          'Bake until pastry is golden and beef is medium-rare',
          'Rest before slicing'
        ],
        cookTime: '1 hour 30 minutes',
        servings: 6,
        source: 'FineDining.com',
        url: 'https://example.com/beef-wellington'
      }
    ]
  };
  
  const dishLower = dishName.toLowerCase();
  
  // Return mock results if available
  if (mockResults[dishLower]) {
    return mockResults[dishLower];
  }
  
  // Generate generic result for unknown dishes
  return [
    {
      title: `${dishName} Recipe`,
      ingredients: [
        'main protein or base ingredient',
        'vegetables',
        'seasonings and spices',
        'cooking liquid or sauce',
        'herbs for garnish'
      ],
      instructions: [
        'Prepare all ingredients according to recipe requirements',
        'Cook main ingredient using appropriate method',
        'Add vegetables and seasonings',
        'Combine with sauce or liquid',
        'Cook until tender and flavors are well combined',
        'Garnish and serve hot'
      ],
      cookTime: '30 minutes',
      servings: 4,
      source: 'RecipeDatabase.com',
      url: `https://example.com/${dishName.toLowerCase().replace(/\s+/g, '-')}`
    }
  ];
};

// Convert online recipe result to our Recipe format
export const convertOnlineRecipeToRecipe = (
  onlineRecipe: OnlineRecipeResult,
  dishName: string
): Recipe => {
  return {
    id: Date.now().toString(),
    title: onlineRecipe.title,
    cookTime: onlineRecipe.cookTime || '30 minutes',
    difficulty: 'Medium',
    servings: onlineRecipe.servings || 4,
    instructions: onlineRecipe.instructions,
    ingredients: onlineRecipe.ingredients,
    ingredientsWithTiming: onlineRecipe.ingredients.map(ingredient => ({
      name: ingredient,
      cookingTime: '5-10 minutes',
      cookingMethod: 'prepare as needed'
    })),
    nutrition: {
      calories: 400,
      protein: '25g',
      carbs: '30g',
      fat: '15g'
    },
    tags: ['online recipe', 'imported', dishName.split(' ')[0]],
    createdAt: new Date(),
    source: onlineRecipe.source,
    sourceUrl: onlineRecipe.url
  };
};

// Check if user is online
export const isOnline = (): boolean => {
  return navigator.onLine;
};