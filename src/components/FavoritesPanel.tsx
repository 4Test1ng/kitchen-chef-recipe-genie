
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Heart, Clock, Trash2 } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  cookTime: string;
  instructions: string[];
  ingredients: string[];
  createdAt: Date;
}

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
    <Card className="border-0 bg-[var(--gradient-card)] backdrop-blur-xl shadow-[var(--shadow-card)]">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-destructive/10">
            <Heart className="w-5 h-5 text-destructive fill-current" />
          </div>
          Favorites ({favorites.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {favorites.map((recipe) => (
              <div 
                key={recipe.id}
                className="p-3 border border-border rounded-lg hover:bg-muted/60 transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 
                    className="font-medium text-sm text-foreground leading-tight cursor-pointer hover:text-primary transition-colors"
                    onClick={() => onSelectFavorite(recipe)}
                  >
                    {recipe.title}
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                    onClick={() => onRemoveFavorite(recipe.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {recipe.cookTime}
                  <span>•</span>
                  <span>{recipe.instructions.length} steps</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
