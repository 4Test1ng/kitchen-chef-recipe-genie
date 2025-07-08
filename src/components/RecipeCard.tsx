
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Heart, Sparkles, ChefHat } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  cookTime: string;
  instructions: string[];
  ingredients: string[];
  createdAt: Date;
}

interface RecipeCardProps {
  recipe: Recipe;
  isGenerating: boolean;
  onImprove: () => void;
  onAddToFavorites: () => void;
  isFavorited: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isGenerating,
  onImprove,
  onAddToFavorites,
  isFavorited
}) => {
  if (isGenerating) {
    return (
      <Card className="border-0 bg-[var(--gradient-card)] backdrop-blur-xl shadow-[var(--shadow-card)]">
        <CardContent className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mb-6" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Cooking up something special...
          </h3>
          <p className="text-muted-foreground text-center">
            Our AI chef is crafting the perfect recipe for your ingredients
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 bg-[var(--gradient-card)] backdrop-blur-xl shadow-[var(--shadow-card)] animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-2xl font-bold text-foreground mb-2">
              {recipe.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {recipe.cookTime}
              </div>
              <div className="flex items-center gap-1">
                <ChefHat className="w-4 h-4" />
                {recipe.instructions.length} steps
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onImprove}
              className="hover:bg-accent/60 border-border"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Improve
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onAddToFavorites}
              disabled={isFavorited}
              className={isFavorited ? "bg-destructive/10 text-destructive border-destructive/20" : "hover:bg-destructive/10 hover:text-destructive border-border"}
            >
              <Heart className={`w-4 h-4 mr-1 ${isFavorited ? "fill-current" : ""}`} />
              {isFavorited ? "Favorited" : "Favorite"}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Ingredients */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.map((ingredient, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Instructions */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Instructions</h3>
          <div className="space-y-3">
            {recipe.instructions.map((instruction, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[var(--gradient-button)] text-primary-foreground text-sm font-semibold rounded-full flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
                <p className="text-foreground leading-relaxed">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
