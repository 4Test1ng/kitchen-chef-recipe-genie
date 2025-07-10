
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
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 px-3 py-1.5 rounded-full">
                <ChefHat className="w-4 h-4 text-accent-foreground" />
                <span className="font-medium">{recipe.instructions.length} steps</span>
              </div>
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
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 pt-6">
        {/* Ingredients */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <h3 className="text-lg font-bold text-foreground">Ingredients</h3>
            <Badge variant="secondary" className="ml-auto">
              {recipe.ingredients.length} items
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground">{ingredient}</span>
              </div>
            ))}
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
