
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChefHat, Clock, Heart, History, Sparkles, Plus, TrendingUp, Users, Star, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeImproveDialog } from '@/components/RecipeImproveDialog';
import { FavoritesPanel } from '@/components/FavoritesPanel';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { StatCard } from '@/components/StatCard';

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
  const [totalRecipesGenerated, setTotalRecipesGenerated] = useState(0);
  const [quickSuggestions] = useState([
    "Chicken, rice, vegetables",
    "Pasta, tomatoes, basil",
    "Eggs, bacon, bread",
    "Salmon, lemon, herbs",
    "Beef, potatoes, onions"
  ]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('kitchenchef-ingredient-history');
    const savedFavorites = localStorage.getItem('kitchenchef-favorites');
    const savedTotal = localStorage.getItem('kitchenchef-total-generated');
    
    if (savedHistory) {
      setIngredientHistory(JSON.parse(savedHistory));
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedTotal) {
      setTotalRecipesGenerated(parseInt(savedTotal));
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
      
      const newTotal = totalRecipesGenerated + 1;
      setTotalRecipesGenerated(newTotal);
      localStorage.setItem('kitchenchef-total-generated', newTotal.toString());
      
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
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 rounded-3xl bg-primary/10 backdrop-blur-sm animate-bounce-gentle">
              <ChefHat className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h1 className="text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                KitchenChef
              </h1>
              <p className="text-sm text-primary/70 font-medium mt-1">AI-Powered Recipe Generator</p>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your available ingredients into amazing, personalized recipes with the power of artificial intelligence
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Recipes Generated"
            value={totalRecipesGenerated}
            icon={BookOpen}
            description="Total recipes created"
          />
          <StatCard
            title="Favorites"
            value={favorites.length}
            icon={Heart}
            description="Saved recipes"
          />
          <StatCard
            title="Ingredients Used"
            value={ingredientHistory.length * 4}
            icon={Sparkles}
            description="Unique combinations"
          />
          <StatCard
            title="Success Rate"
            value="98%"
            icon={TrendingUp}
            description="Recipe satisfaction"
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recipe Generator Form */}
            <Card className="glass-card animate-slide-up">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 animate-pulse-glow">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-lg font-bold">Generate Recipe</span>
                    <p className="text-sm text-muted-foreground font-normal">AI-powered cooking assistant</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Your Ingredients</label>
                  <Textarea
                    placeholder="Enter your ingredients separated by commas (e.g., chicken, rice, tomatoes, onions)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="min-h-[100px] resize-none bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                {/* Quick suggestions */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Quick suggestions</label>
                  <div className="flex flex-wrap gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary/10 hover:border-primary transition-colors"
                        onClick={() => setIngredients(suggestion)}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleGenerateRecipe}
                  disabled={isGenerating}
                  className="w-full gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover-lift"
                  size="lg"
                >
                  {isGenerating ? (
                    <LoadingSpinner size="sm" text="Creating your recipe..." />
                  ) : (
                    <>
                      <ChefHat className="w-5 h-5 mr-2" />
                      Generate Recipe
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Ingredient History */}
            {ingredientHistory.length > 0 && (
              <Card className="glass-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/50">
                      <History className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <span className="text-base">Recent Searches</span>
                      <p className="text-xs text-muted-foreground font-normal">Click to reuse</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {ingredientHistory.map((item, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left p-3 h-auto hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-200 rounded-lg"
                          onClick={() => handleHistoryClick(item)}
                        >
                          <div className="truncate text-sm text-foreground">
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
              <Card className="glass-card text-center h-full min-h-[500px] flex items-center justify-center">
                <CardContent className="space-y-8 max-w-lg">
                  <div className="relative">
                    <div className="p-6 rounded-3xl bg-primary/10 mx-auto w-fit animate-bounce-gentle">
                      <ChefHat className="w-20 h-20 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 bg-success rounded-full animate-pulse">
                      <Sparkles className="w-4 h-4 text-success-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      Ready to Cook Something Amazing?
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Enter your available ingredients and let our AI chef create the perfect recipe tailored just for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-success">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        Personalized recipes
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Step-by-step instructions
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-warning">
                        <div className="w-2 h-2 bg-warning rounded-full"></div>
                        Ingredient optimization
                      </div>
                      <div className="flex items-center gap-2 text-destructive">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                        Cooking time estimates
                      </div>
                    </div>
                  </div>
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
