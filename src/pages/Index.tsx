
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IngredientChipsInput } from '@/components/IngredientChipsInput';
import { DishInput } from '@/components/DishInput';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChefHat, Clock, Heart, History, Sparkles, Plus, TrendingUp, Users, Star, BookOpen, X, Utensils } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { RecipeCard } from '@/components/RecipeCard';
import { RecipeImproveDialog } from '@/components/RecipeImproveDialog';
import { FavoritesPanel } from '@/components/FavoritesPanel';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { StatCard } from '@/components/StatCard';

import { Recipe, IngredientWithTiming } from '@/types/recipe';
import { SearchMode } from '@/types/dish';

const KitchenChef = () => {
  const [searchMode, setSearchMode] = useState<SearchMode>('ingredients');
  const [ingredients, setIngredients] = useState('');
  const [dishName, setDishName] = useState('');
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [ingredientHistory, setIngredientHistory] = useState<string[]>([]);
  const [dishHistory, setDishHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [improveDialogOpen, setImproveDialogOpen] = useState(false);
  const [totalRecipesGenerated, setTotalRecipesGenerated] = useState(0);
  const [thumbsUp, setThumbsUp] = useState(0);
  const [thumbsDown, setThumbsDown] = useState(0);
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
    const savedDishHistory = localStorage.getItem('kitchenchef-dish-history');
    const savedFavorites = localStorage.getItem('kitchenchef-favorites');
    const savedTotal = localStorage.getItem('kitchenchef-total-generated');
    const savedUp = localStorage.getItem('kitchenchef-feedback-up');
    const savedDown = localStorage.getItem('kitchenchef-feedback-down');
    
    if (savedHistory) {
      setIngredientHistory(JSON.parse(savedHistory));
    }
    
    if (savedDishHistory) {
      setDishHistory(JSON.parse(savedDishHistory));
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedTotal) {
      setTotalRecipesGenerated(parseInt(savedTotal));
    }

    if (savedUp) setThumbsUp(parseInt(savedUp));
    if (savedDown) setThumbsDown(parseInt(savedDown));
  }, []);

  // Save ingredient history to localStorage
  const saveIngredientHistory = (newHistory: string[]) => {
    localStorage.setItem('kitchenchef-ingredient-history', JSON.stringify(newHistory));
    setIngredientHistory(newHistory);
  };

  // Save dish history to localStorage
  const saveDishHistory = (newHistory: string[]) => {
    localStorage.setItem('kitchenchef-dish-history', JSON.stringify(newHistory));
    setDishHistory(newHistory);
  };

  // Save favorites to localStorage
  const saveFavorites = (newFavorites: Recipe[]) => {
    localStorage.setItem('kitchenchef-favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  // Enhanced AI recipe generation with ingredient timing and nutritional info
  const generateRecipe = async (ingredientList: string[]): Promise<Recipe> => {
    try {
      const prompt = `Create a detailed recipe using ONLY the following ingredients: ${ingredientList.join(', ')}.

STRICT REQUIREMENTS:
- You MUST use ONLY the ingredients provided in the list above
- Do NOT suggest or add any additional ingredients not in the list
- Do NOT mention ingredients that are not provided
- Create a practical recipe that can be made with just these ingredients
- Assume basic seasonings like salt and pepper are available
- Provide specific cooking times and methods for each ingredient
- Include difficulty level, servings, and nutritional estimates
- Add relevant cooking tags

Format your response as JSON:
{
  "title": "Recipe Name",
  "cookTime": "X minutes",
  "difficulty": "Easy|Medium|Hard",
  "servings": 2-4,
  "instructions": ["step 1", "step 2", ...],
  "ingredientsWithTiming": [
    {"name": "ingredient", "cookingTime": "X minutes", "cookingMethod": "sauté/boil/bake/etc"}
  ],
  "nutrition": {"calories": 400, "protein": "25g", "carbs": "30g", "fat": "15g"},
  "tags": ["quick", "healthy", "comfort food", etc]
}`;

      // For now, we'll use a deterministic approach based on ingredients
      // In a real implementation, this would call an AI API
      const response = await generateRecipeWithAI(prompt, ingredientList);
      
      return {
        id: Date.now().toString(),
        ...response,
        ingredients: ingredientList,
        createdAt: new Date()
      };
    } catch (error) {
      console.error('Recipe generation failed:', error);
      // Fallback to a simple recipe using only provided ingredients
      return generateFallbackRecipe(ingredientList);
    }
  };

  // Enhanced fallback recipe generator with detailed timing and nutrition
  const generateFallbackRecipe = (ingredientList: string[]): Recipe => {
    const hasProtein = ingredientList.some(ing => 
      ['chicken', 'beef', 'pork', 'fish', 'salmon', 'turkey', 'egg'].some(protein => 
        ing.toLowerCase().includes(protein)
      )
    );
    
    const hasCarbs = ingredientList.some(ing => 
      ['rice', 'pasta', 'bread', 'potato', 'noodle'].some(carb => 
        ing.toLowerCase().includes(carb)
      )
    );

    const hasVegetables = ingredientList.some(ing => 
      ['tomato', 'onion', 'pepper', 'carrot', 'broccoli', 'spinach', 'mushroom'].some(veg => 
        ing.toLowerCase().includes(veg)
      )
    );

    const title = hasProtein && hasCarbs 
      ? `${ingredientList[0]} Bowl with ${ingredientList.slice(1, 3).join(' and ')}`
      : `Simple ${ingredientList.slice(0, 2).join(' and ')} Dish`;

    // Generate ingredient timing based on common cooking methods
    const ingredientsWithTiming: IngredientWithTiming[] = ingredientList.map(ingredient => {
      const lowerIng = ingredient.toLowerCase();
      
      if (['chicken', 'beef', 'pork'].some(meat => lowerIng.includes(meat))) {
        return { name: ingredient, cookingTime: "12-15 minutes", cookingMethod: "pan-fry until golden" };
      } else if (['fish', 'salmon'].some(fish => lowerIng.includes(fish))) {
        return { name: ingredient, cookingTime: "8-10 minutes", cookingMethod: "pan-sear or bake" };
      } else if (lowerIng.includes('egg')) {
        return { name: ingredient, cookingTime: "3-5 minutes", cookingMethod: "scramble or fry" };
      } else if (['rice'].some(grain => lowerIng.includes(grain))) {
        return { name: ingredient, cookingTime: "18-20 minutes", cookingMethod: "simmer covered" };
      } else if (['pasta', 'noodle'].some(pasta => lowerIng.includes(pasta))) {
        return { name: ingredient, cookingTime: "8-12 minutes", cookingMethod: "boil in salted water" };
      } else if (['potato'].some(starch => lowerIng.includes(starch))) {
        return { name: ingredient, cookingTime: "15-20 minutes", cookingMethod: "roast or boil" };
      } else if (['onion'].some(veg => lowerIng.includes(veg))) {
        return { name: ingredient, cookingTime: "5-7 minutes", cookingMethod: "sauté until translucent" };
      } else if (['tomato'].some(veg => lowerIng.includes(veg))) {
        return { name: ingredient, cookingTime: "3-5 minutes", cookingMethod: "sauté until softened" };
      } else {
        return { name: ingredient, cookingTime: "5-8 minutes", cookingMethod: "sauté or steam" };
      }
    });

    const instructions = [
      "Gather and prepare all ingredients according to their specific timing requirements",
      "Start with the longest cooking items first (grains, starches, proteins)",
      hasCarbs ? `Cook ${ingredientList.find(ing => ['rice', 'pasta', 'potato'].some(carb => ing.toLowerCase().includes(carb))) || 'grains'} according to timing above` : "Begin by preparing your main ingredients",
      hasProtein ? `Cook protein ingredients as specified in timing - ensure fully cooked and safe to eat` : "Heat your main ingredients in a pan",
      hasVegetables ? "Add vegetables according to their cooking times, starting with harder vegetables first" : "Add remaining ingredients",
      "Combine all cooked ingredients in a serving dish, maintaining their textures",
      "Season with salt and pepper to taste, adjust flavors as needed",
      "Serve hot and enjoy your custom recipe with perfectly timed ingredients!"
    ];

    const difficulty = hasProtein && hasCarbs && hasVegetables ? 'Medium' : 'Easy';
    const servings = Math.min(Math.max(Math.ceil(ingredientList.length / 2), 2), 4);
    
    // Estimate nutrition based on ingredients
    const estimatedCalories = ingredientList.length * 80 + (hasProtein ? 150 : 0) + (hasCarbs ? 100 : 0);
    const tags = [
      difficulty.toLowerCase(),
      hasProtein ? 'protein-rich' : 'vegetarian',
      hasVegetables ? 'nutritious' : 'simple',
      'homemade',
      ingredientList.length <= 4 ? 'minimal-ingredients' : 'diverse'
    ];

    return {
      id: Date.now().toString(),
      title,
      cookTime: "20-25 minutes",
      difficulty,
      servings,
      instructions,
      ingredients: ingredientList,
      ingredientsWithTiming,
      nutrition: {
        calories: estimatedCalories,
        protein: hasProtein ? "25-30g" : "8-12g",
        carbs: hasCarbs ? "35-45g" : "15-25g",
        fat: "10-15g"
      },
      tags,
      createdAt: new Date()
    };
  };

  // Generate recipe from dish name
  const generateRecipeFromDish = async (dish: string): Promise<Recipe> => {
    const dishData = getDishData(dish);
    return generateRecipe(dishData.commonIngredients);
  };

  // Knowledge base for popular dishes
  const getDishData = (dishName: string) => {
    const dishLower = dishName.toLowerCase();
    
    // Basic dish knowledge base
    const dishDatabase: Record<string, string[]> = {
      'spaghetti carbonara': ['spaghetti', 'eggs', 'bacon', 'parmesan cheese', 'black pepper'],
      'chicken fried rice': ['chicken', 'rice', 'eggs', 'soy sauce', 'vegetables'],
      'margherita pizza': ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'basil'],
      'beef stir fry': ['beef', 'vegetables', 'soy sauce', 'garlic', 'ginger'],
      'chocolate chip cookies': ['flour', 'butter', 'sugar', 'eggs', 'chocolate chips'],
      'chicken tacos': ['chicken', 'tortillas', 'lettuce', 'tomatoes', 'cheese'],
      'pad thai': ['rice noodles', 'shrimp', 'eggs', 'peanuts', 'bean sprouts'],
      'caesar salad': ['lettuce', 'parmesan cheese', 'croutons', 'caesar dressing'],
      'grilled cheese': ['bread', 'cheese', 'butter'],
      'pancakes': ['flour', 'eggs', 'milk', 'sugar', 'baking powder'],
      'chicken parmesan': ['chicken', 'breadcrumbs', 'parmesan cheese', 'tomato sauce'],
      'butter chicken': ['chicken', 'tomatoes', 'cream', 'butter', 'spices'],
      'fish and chips': ['fish', 'potatoes', 'flour', 'oil'],
      'lasagna': ['lasagna noodles', 'ground beef', 'cheese', 'tomato sauce'],
      'ramen': ['ramen noodles', 'broth', 'eggs', 'vegetables', 'meat']
    };

    // Find exact match or partial match
    const exactMatch = dishDatabase[dishLower];
    if (exactMatch) {
      return { commonIngredients: exactMatch };
    }

    // Fuzzy matching for common dish patterns
    for (const [dish, ingredients] of Object.entries(dishDatabase)) {
      if (dish.includes(dishLower) || dishLower.includes(dish)) {
        return { commonIngredients: ingredients };
      }
    }

    // Default ingredients for unknown dishes
    return {
      commonIngredients: ['main protein', 'vegetables', 'seasonings', 'cooking oil']
    };
  };

  // Placeholder for AI API call - replace with actual AI service
  const generateRecipeWithAI = async (prompt: string, ingredientList: string[]) => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For now, return the fallback recipe
    // In a real implementation, this would call OpenAI or another AI service
    return generateFallbackRecipe(ingredientList);
  };

  const handleGenerateRecipe = async () => {
    const input = searchMode === 'ingredients' ? ingredients : dishName;
    const inputType = searchMode === 'ingredients' ? 'ingredients' : 'dish name';
    
    if (!input.trim()) {
      toast({
        title: `Missing ${inputType}`,
        description: `Please enter ${inputType} to generate a recipe.`,
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      let recipe: Recipe;
      
      if (searchMode === 'ingredients') {
        const ingredientList = ingredients.split(',').map(item => item.trim()).filter(Boolean);
        
        // Add to ingredient history
        const newHistory = [ingredients, ...ingredientHistory.filter(item => item !== ingredients)].slice(0, 10);
        saveIngredientHistory(newHistory);
        
        recipe = await generateRecipe(ingredientList);
      } else {
        // Add to dish history
        const newHistory = [dishName, ...dishHistory.filter(item => item !== dishName)].slice(0, 10);
        saveDishHistory(newHistory);
        
        recipe = await generateRecipeFromDish(dishName);
      }
      
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
        description: "Please try again with different input.",
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

  const handleHistoryClick = (historicalItem: string, type: 'ingredients' | 'dish') => {
    if (type === 'ingredients') {
      setIngredients(historicalItem);
      setSearchMode('ingredients');
    } else {
      setDishName(historicalItem);
      setSearchMode('dish');
    }
  };

  const handleRemoveFromHistory = (indexToRemove: number, type: 'ingredients' | 'dish') => {
    if (type === 'ingredients') {
      const newHistory = ingredientHistory.filter((_, index) => index !== indexToRemove);
      saveIngredientHistory(newHistory);
    } else {
      const newHistory = dishHistory.filter((_, index) => index !== indexToRemove);
      saveDishHistory(newHistory);
    }
    
    toast({
      title: "Removed from history",
      description: `${type === 'ingredients' ? 'Ingredient' : 'Dish'} search removed from your recent searches.`,
    });
  };

  const handleRecipeFeedback = (feedback: 'up' | 'down') => {
    if (feedback === 'up') {
      const next = thumbsUp + 1;
      setThumbsUp(next);
      localStorage.setItem('kitchenchef-feedback-up', next.toString());
      toast({ title: "Thanks for the feedback!", description: "Glad you liked this recipe." });
    } else {
      const next = thumbsDown + 1;
      setThumbsDown(next);
      localStorage.setItem('kitchenchef-feedback-down', next.toString());
      toast({ title: "Feedback noted", description: "We'll aim to improve future recipes." });
    }
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
            <div className="p-4 rounded-2xl bg-primary/5 backdrop-blur-sm">
              <h1 className="text-6xl font-bold text-white">
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
            value={thumbsUp + thumbsDown > 0 ? Math.round((thumbsUp / (thumbsUp + thumbsDown)) * 100) + "%" : "—"}
            icon={TrendingUp}
            description="Recipe satisfaction"
            trend={{ value: thumbsUp + thumbsDown > 0 ? Math.round(((thumbsUp - thumbsDown) / Math.max(thumbsUp + thumbsDown, 1)) * 100) : 0, isPositive: thumbsUp >= thumbsDown }}
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
                <Tabs value={searchMode} onValueChange={(value) => setSearchMode(value as SearchMode)}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ingredients" className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      By Ingredients
                    </TabsTrigger>
                    <TabsTrigger value="dish" className="flex items-center gap-2">
                      <Utensils className="w-4 h-4" />
                      By Dish
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="ingredients" className="space-y-4">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">Your Ingredients</label>
                      <IngredientChipsInput
                        value={ingredients}
                        onChange={setIngredients}
                        placeholder="Enter ingredients (e.g., chicken, rice, tomatoes, onions)"
                        className="bg-background/50"
                      />
                    </div>
                    
                    {/* Quick ingredient suggestions */}
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
                  </TabsContent>
                  
                  <TabsContent value="dish" className="space-y-4">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">Dish Name</label>
                      <DishInput
                        value={dishName}
                        onChange={setDishName}
                        placeholder="Enter a dish name (e.g., Chicken Parmesan, Pad Thai, Tacos)"
                        className="bg-background/50"
                      />
                    </div>
                  </TabsContent>
                </Tabs>

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

            {/* Search History */}
            {(ingredientHistory.length > 0 || dishHistory.length > 0) && (
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
                    <div className="space-y-3">
                      {ingredientHistory.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            By Ingredients
                          </h4>
                          <div className="space-y-1">
                            {ingredientHistory.map((item, index) => (
                              <div
                                key={`ing-${index}`}
                                className="flex items-center gap-2 p-2 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-200 rounded-md group"
                              >
                                <Button
                                  variant="ghost"
                                  className="flex-1 justify-start text-left h-auto p-0"
                                  onClick={() => handleHistoryClick(item, 'ingredients')}
                                >
                                  <div className="truncate text-sm text-foreground">
                                    {item}
                                  </div>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFromHistory(index, 'ingredients');
                                  }}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {dishHistory.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                            <Utensils className="w-3 h-3" />
                            By Dish
                          </h4>
                          <div className="space-y-1">
                            {dishHistory.map((item, index) => (
                              <div
                                key={`dish-${index}`}
                                className="flex items-center gap-2 p-2 hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-200 rounded-md group"
                              >
                                <Button
                                  variant="ghost"
                                  className="flex-1 justify-start text-left h-auto p-0"
                                  onClick={() => handleHistoryClick(item, 'dish')}
                                >
                                  <div className="truncate text-sm text-foreground">
                                    {item}
                                  </div>
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/10 hover:text-destructive"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveFromHistory(index, 'dish');
                                  }}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
                onRate={handleRecipeFeedback}
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
