
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChefHat, Clock, Heart, History, Sparkles, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeImproveDialog } from '@/components/RecipeImproveDialog';
import { FavoritesPanel } from '@/components/FavoritesPanel';

interface Recipe {
  id: string;
  title: string;
  cookTime: string;
  instructions: string[];
  ingredients: string[];
  createdAt: Date;
}

const KitchenChef = () => {
  const [ingredients, setIngredients] = useState('');
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [ingredientHistory, setIngredientHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [improveDialogOpen, setImproveDialogOpen] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('kitchenchef-ingredient-history');
    const savedFavorites = localStorage.getItem('kitchenchef-favorites');
    
    if (savedHistory) {
      setIngredientHistory(JSON.parse(savedHistory));
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save ingredient history to localStorage
  const saveIngredientHistory = (newHistory: string[]) => {
    localStorage.setItem('kitchenchef-ingredient-history', JSON.stringify(newHistory));
    setIngredientHistory(newHistory);
  };

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: Recipe[]) => {
    localStorage.setItem('kitchenchef-favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  // Mock AI recipe generation (replace with actual Genkit implementation)
  const generateRecipe = async (ingredientList: string[]): Promise<Recipe> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleRecipes = [
      {
        title: "Mediterranean Veggie Pasta",
        cookTime: "25 minutes",
        instructions: [
          "Boil pasta according to package instructions",
          "Heat olive oil in a large pan over medium heat",
          "Sauté diced onions until translucent, about 5 minutes",
          "Add minced garlic and cook for 1 minute",
          "Add diced tomatoes and cook until softened",
          "Season with salt, pepper, and Italian herbs",
          "Toss cooked pasta with the vegetable mixture",
          "Garnish with fresh basil and serve hot"
        ]
      },
      {
        title: "Hearty Chicken and Rice Bowl",
        cookTime: "30 minutes",
        instructions: [
          "Season chicken breast with salt and pepper",
          "Cook rice according to package directions",
          "Heat oil in a skillet and cook chicken until golden",
          "Remove chicken and slice into strips",
          "In the same pan, sauté vegetables until tender",
          "Add cooked rice and chicken back to the pan",
          "Stir everything together and heat through",
          "Serve hot with your favorite sauce"
        ]
      }
    ];

    const randomRecipe = sampleRecipes[Math.floor(Math.random() * sampleRecipes.length)];
    
    return {
      id: Date.now().toString(),
      ...randomRecipe,
      ingredients: ingredientList,
      createdAt: new Date()
    };
  };

  const handleGenerateRecipe = async () => {
    if (!ingredients.trim()) {
      toast({
        title: "Missing ingredients",
        description: "Please enter some ingredients to generate a recipe.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const ingredientList = ingredients.split(',').map(item => item.trim()).filter(Boolean);
      
      // Add to history (avoid duplicates)
      const newHistory = [ingredients, ...ingredientHistory.filter(item => item !== ingredients)].slice(0, 10);
      saveIngredientHistory(newHistory);
      
      const recipe = await generateRecipe(ingredientList);
      setCurrentRecipe(recipe);
      
      toast({
        title: "Recipe generated!",
        description: "Your delicious recipe is ready to cook.",
      });
    } catch (error) {
      toast({
        title: "Error generating recipe",
        description: "Please try again with different ingredients.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImproveRecipe = async (feedback: string) => {
    if (!currentRecipe) return;
    
    setIsGenerating(true);
    setImproveDialogOpen(false);
    
    try {
      // Mock improvement (replace with actual Genkit implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const improvedRecipe: Recipe = {
        ...currentRecipe,
        id: Date.now().toString(),
        title: `${currentRecipe.title} (Improved)`,
        instructions: [
          ...currentRecipe.instructions,
          `Modified based on feedback: ${feedback}`
        ],
        createdAt: new Date()
      };
      
      setCurrentRecipe(improvedRecipe);
      
      toast({
        title: "Recipe improved!",
        description: "Your recipe has been updated based on your feedback.",
      });
    } catch (error) {
      toast({
        title: "Error improving recipe",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAddToFavorites = () => {
    if (!currentRecipe) return;
    
    const newFavorites = [currentRecipe, ...favorites];
    saveFavorites(newFavorites);
    
    toast({
      title: "Added to favorites!",
      description: "Recipe saved to your favorites list.",
    });
  };

  const handleRemoveFromFavorites = (recipeId: string) => {
    const newFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    saveFavorites(newFavorites);
    
    toast({
      title: "Removed from favorites",
      description: "Recipe removed from your favorites list.",
    });
  };

  const handleHistoryClick = (historicalIngredients: string) => {
    setIngredients(historicalIngredients);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="w-8 h-8 text-orange-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              KitchenChef
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your ingredients into delicious recipes with the power of AI
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recipe Generator Form */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  Generate Recipe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter your ingredients separated by commas (e.g., chicken, rice, tomatoes, onions)"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                <Button 
                  onClick={handleGenerateRecipe}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <ChefHat className="w-4 h-4 mr-2" />
                      Generate Recipe
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Ingredient History */}
            {ingredientHistory.length > 0 && (
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-5 h-5 text-green-500" />
                    Recent Searches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {ingredientHistory.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left p-3 h-auto"
                          onClick={() => handleHistoryClick(item)}
                        >
                          <div className="truncate text-sm text-gray-600">
                            {item}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}

            {/* Favorites */}
            <FavoritesPanel 
              favorites={favorites}
              onSelectFavorite={setCurrentRecipe}
              onRemoveFavorite={handleRemoveFromFavorites}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentRecipe ? (
              <RecipeCard 
                recipe={currentRecipe}
                isGenerating={isGenerating}
                onImprove={() => setImproveDialogOpen(true)}
                onAddToFavorites={handleAddToFavorites}
                isFavorited={favorites.some(fav => fav.title === currentRecipe.title)}
              />
            ) : (
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
                <CardContent className="flex flex-col items-center justify-center py-20 text-center">
                  <ChefHat className="w-16 h-16 text-gray-300 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Ready to Cook Something Amazing?
                  </h3>
                  <p className="text-gray-500 max-w-md">
                    Enter your available ingredients in the sidebar and let our AI chef create a perfect recipe just for you.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Recipe Improvement Dialog */}
      <RecipeImproveDialog
        open={improveDialogOpen}
        onOpenChange={setImproveDialogOpen}
        onImprove={handleImproveRecipe}
      />
    </div>
  );
};

export default KitchenChef;
