export interface DishRecipe {
  dishName: string;
  description?: string;
  cuisineType?: string;
  commonIngredients: string[];
  cookingMethods?: string[];
  variations?: string[];
}

export type SearchMode = 'ingredients' | 'dish';