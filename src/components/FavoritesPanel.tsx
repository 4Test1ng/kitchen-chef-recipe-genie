
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart, Clock, Trash2 } from 'lucide-react';

import { Recipe } from '@/types/recipe';

interface FavoritesPanelProps {
  favorites: Recipe[];
  onSelectFavorite: (recipe: Recipe) => void;
  onRemoveFavorite: (recipeId: string) => void;
}

export const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  favorites,
  onSelectFavorite,
  onRemoveFavorite
}) => {
  if (favorites.length === 0) {
    return null;
  }

  return (
    <Card className="glass-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success/10">
            <Heart className="w-5 h-5 text-success fill-current" />
          </div>
          <div>
            <span className="text-base">Saved Recipes</span>
            <p className="text-xs text-muted-foreground font-normal">{favorites.length} favorites</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {favorites.map((recipe) => (
              <div 
                key={recipe.id}
                className="group p-4 bg-card/30 border border-border/30 rounded-xl hover:bg-card/50 hover:border-border/50 transition-all duration-200 hover-lift"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 
                    className="font-semibold text-sm text-foreground leading-tight cursor-pointer hover:text-primary transition-colors line-clamp-2"
                    onClick={() => onSelectFavorite(recipe)}
                  >
                    {recipe.title}
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-7 w-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md"
                    onClick={() => onRemoveFavorite(recipe.id)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1 text-primary">
                    <Clock className="w-3 h-3" />
                    <span className="font-medium">{recipe.cookTime}</span>
                  </div>
                  <div className="w-1 h-1 bg-border rounded-full"></div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span className="font-medium">{recipe.instructions.length} steps</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
