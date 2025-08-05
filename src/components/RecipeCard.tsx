
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Heart, Sparkles, ChefHat, Users, Target, Timer, ShoppingCart } from 'lucide-react';
import { ShoppingListDialog } from './ShoppingListDialog';
import { RecipeScaler } from './RecipeScaler';

import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  isGenerating: boolean;
  onImprove: () => void;
  onAddToFavorites: () => void;
  isFavorited: boolean;
}

const RecipeCardComponent: React.FC<RecipeCardProps> = ({
  recipe,
  isGenerating,
  onImprove,
  onAddToFavorites,
  isFavorited
}) => {
  const [scaledServings, setScaledServings] = React.useState(recipe.servings || 2);

  if (isGenerating) {
    return (
      <Card className="glass-card min-h-[500px] flex items-center justify-center">
        <CardContent className="text-center space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-primary/20 border-t-primary mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-primary animate-bounce" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">
              Cooking up something special...
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              Our AI chef is analyzing your ingredients and crafting the perfect recipe just for you
            </p>
          </div>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card-hover animate-slide-up">
      <CardHeader className="pb-6 border-b border-border/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <ChefHat className="w-5 h-5 text-success" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                  {recipe.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">Generated with AI precision</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 px-3 py-1.5 rounded-full">
                <ChefHat className="w-4 h-4 text-accent-foreground" />
                <span className="font-medium">{recipe.instructions.length} steps</span>
              </div>
              {recipe.difficulty && (
                <div className="flex items-center gap-2 bg-success/10 px-3 py-1.5 rounded-full">
                  <Target className="w-4 h-4 text-success" />
                  <span className="font-medium">{recipe.difficulty}</span>
                </div>
              )}
              {recipe.servings && (
                <div className="flex items-center gap-2 bg-warning/10 px-3 py-1.5 rounded-full">
                  <Users className="w-4 h-4 text-warning" />
                  <span className="font-medium">{recipe.servings} servings</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onImprove}
              className="hover:bg-primary/10 hover:border-primary transition-all duration-200 hover-lift"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Improve
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onAddToFavorites}
              disabled={isFavorited}
              className={isFavorited 
                ? "bg-success/10 text-success border-success/20 cursor-not-allowed" 
                : "hover:bg-success/10 hover:text-success hover:border-success/20 transition-all duration-200 hover-lift"
              }
            >
              <Heart className={`w-4 h-4 mr-2 ${isFavorited ? "fill-current" : ""}`} />
              {isFavorited ? "Saved" : "Save"}
            </Button>
            <ShoppingListDialog 
              recipe={recipe} 
              scalingFactor={scaledServings / (recipe.servings || 2)} 
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 pt-6">
        {/* Recipe Scaler */}
        {recipe.servings && (
          <RecipeScaler
            originalServings={recipe.servings}
            onServingsChange={setScaledServings}
          />
        )}
        {/* Recipe Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Nutrition Info */}
        {recipe.nutrition && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">{recipe.nutrition.calories}</div>
              <div className="text-xs text-muted-foreground">Calories</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-success">{recipe.nutrition.protein}</div>
              <div className="text-xs text-muted-foreground">Protein</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-warning">{recipe.nutrition.carbs}</div>
              <div className="text-xs text-muted-foreground">Carbs</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{recipe.nutrition.fat}</div>
              <div className="text-xs text-muted-foreground">Fat</div>
            </div>
          </div>
        )}

        {/* Ingredients with Timing */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <h3 className="text-lg font-bold text-foreground">Ingredients & Cooking Times</h3>
            <Badge variant="secondary" className="ml-auto">
              {recipe.ingredients.length} items
            </Badge>
          </div>
          <div className="space-y-3">
            {recipe.ingredientsWithTiming && recipe.ingredientsWithTiming.length > 0 ? (
              recipe.ingredientsWithTiming.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-colors"
                >
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{ingredient.name}</div>
                    <div className="text-sm text-muted-foreground">{ingredient.cookingMethod}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Timer className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{ingredient.cookingTime}</span>
                  </div>
                </div>
              ))
            ) : (
              recipe.ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium text-foreground">{ingredient}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Instructions */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-success rounded-full"></div>
            <h3 className="text-lg font-bold text-foreground">Cooking Instructions</h3>
            <Badge variant="secondary" className="ml-auto">
              {recipe.instructions.length} steps
            </Badge>
          </div>
          <div className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="group">
                <div className="flex gap-4 p-4 bg-card/30 rounded-xl border border-border/30 hover:bg-card/50 hover:border-border/50 transition-all duration-200">
                  <div className="flex-shrink-0 w-8 h-8 gradient-primary text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">
                    {instruction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const RecipeCard = RecipeCardComponent;
