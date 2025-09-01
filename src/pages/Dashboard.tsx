import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Clock, Star, Trash2, Heart } from "lucide-react";
import { StatCard } from "@/components/StatCard";

// Mock user recipes data
const mockUserRecipes = [
  {
    id: 1,
    name: "Creamy Mushroom Risotto",
    description: "AI-generated risotto recipe based on available ingredients",
    difficulty: "Medium" as const,
    prep_time_minutes: 10,
    cook_time_minutes: 25,
    servings: 4,
    cuisine_type: "Italian",
    is_favorite: true,
    created_at: "2024-02-15T16:20:00Z"
  },
  {
    id: 2,
    name: "Asian Fusion Stir-fry",
    description: "Quick and healthy vegetable stir-fry",
    difficulty: "Easy" as const,
    prep_time_minutes: 15,
    cook_time_minutes: 10,
    servings: 2,
    cuisine_type: "Asian",
    is_favorite: false,
    created_at: "2024-02-20T11:45:00Z"
  }
];

const Dashboard = () => {
  const { user } = useAuth();
  const [recipes] = useState(mockUserRecipes);
  const [favorites] = useState(mockUserRecipes.filter(r => r.is_favorite));

  const totalRecipes = recipes.length;
  const totalFavorites = favorites.length;
  const totalCookTime = recipes.reduce((acc, recipe) => acc + recipe.cook_time_minutes, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, {user?.first_name}!
        </h1>
        <p className="text-muted-foreground">
          Manage your recipes and cooking adventures
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Recipes"
          value={totalRecipes.toString()}
          description="Recipes you've generated"
          icon={ChefHat}
        />
        <StatCard
          title="Favorites"
          value={totalFavorites.toString()}
          description="Your favorite recipes"
          icon={Heart}
        />
        <StatCard
          title="Total Cook Time"
          value={`${totalCookTime}m`}
          description="Time spent cooking"
          icon={Clock}
        />
      </div>

      {/* Recipe Management */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto">
          <TabsTrigger value="all">All Recipes</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Recipes</h2>
            <Button onClick={() => window.location.href = '/generate'}>
              <ChefHat className="mr-2 h-4 w-4" />
              Generate New Recipe
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{recipe.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {recipe.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {recipe.is_favorite && (
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                      )}
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{recipe.cuisine_type}</Badge>
                    <Badge variant="outline">{recipe.difficulty}</Badge>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      {recipe.prep_time_minutes + recipe.cook_time_minutes}m
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Serves {recipe.servings}</span>
                    <span>
                      {new Date(recipe.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4 mt-6">
          <h2 className="text-xl font-semibold">Favorite Recipes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {favorites.map((recipe) => (
              <Card key={recipe.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{recipe.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {recipe.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{recipe.cuisine_type}</Badge>
                    <Badge variant="outline">{recipe.difficulty}</Badge>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      {recipe.prep_time_minutes + recipe.cook_time_minutes}m
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Serves {recipe.servings}</span>
                    <span>
                      {new Date(recipe.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;