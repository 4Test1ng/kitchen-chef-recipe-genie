export interface IngredientWithTiming {
  name: string;
  cookingTime: string;
  cookingMethod: string;
}

export interface Recipe {
  id: string;
  title: string;
  cookTime: string;
  instructions: string[];
  ingredients: string[];
  ingredientsWithTiming?: IngredientWithTiming[];
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  servings?: number;
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags?: string[];
  createdAt: Date;
  description?: string;
  source?: string;
  sourceUrl?: string;
}