import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecipeBooklet = () => {
  const navigate = useNavigate();

  const continents = [
    {
      name: "Africa",
      icon: "🌍",
      recipes: [
        {
          name: "Jollof Rice",
          region: "West Africa",
          ingredients: "Rice, tomatoes, peppers, onions, stock, tomato paste, spices",
          recipe: "Blend tomatoes and peppers, fry with onions and tomato paste. Add spices, stock, and rice. Cook until tender.",
          time: "45 min",
          serves: 6
        },
        {
          name: "Bobotie", 
          region: "South Africa",
          ingredients: "Ground beef, onion, curry powder, bread, milk, eggs, raisins",
          recipe: "Fry onion, add beef and curry. Stir in soaked bread and raisins. Place in dish, top with egg-milk custard, bake until set.",
          time: "1 hour",
          serves: 6
        },
        {
          name: "Tagine",
          region: "Morocco", 
          ingredients: "Lamb/chicken, onion, garlic, ginger, saffron, dried apricots, almonds",
          recipe: "Sear meat, add onions, spices, water. Simmer with apricots and almonds until tender.",
          time: "2 hours",
          serves: 6
        }
      ]
    },
    {
      name: "Asia",
      icon: "🏮", 
      recipes: [
        {
          name: "Chicken Biryani",
          region: "India/Pakistan",
          ingredients: "Basmati rice, chicken, onions, yogurt, tomatoes, spices, herbs",
          recipe: "Cook chicken with spices, layer with rice, herbs, and fried onions. Steam on low heat.",
          time: "1.5 hours",
          serves: 6
        },
        {
          name: "Sushi",
          region: "Japan",
          ingredients: "Sushi rice, rice vinegar, sugar, seaweed sheets, raw fish, vegetables", 
          recipe: "Season rice, place on nori sheet, add fillings, roll tightly, slice.",
          time: "45 min",
          serves: 4
        },
        {
          name: "Pad Thai",
          region: "Thailand",
          ingredients: "Rice noodles, shrimp/chicken, eggs, bean sprouts, peanuts, tamarind paste",
          recipe: "Stir-fry noodles with tamarind sauce, add protein, eggs, sprouts, top with peanuts.",
          time: "20 min", 
          serves: 4
        }
      ]
    },
    {
      name: "Europe",
      icon: "🏰",
      recipes: [
        {
          name: "Paella",
          region: "Spain",
          ingredients: "Short-grain rice, saffron, chicken, seafood, peppers, tomatoes, stock",
          recipe: "Fry meat and veg, add rice and saffron stock. Place seafood on top, cook until crust forms.",
          time: "45 min",
          serves: 6
        },
        {
          name: "Beef Stroganoff", 
          region: "Russia",
          ingredients: "Beef strips, mushrooms, onions, sour cream, mustard",
          recipe: "Fry beef, remove. Cook onions and mushrooms, add sour cream and mustard. Return beef, simmer.",
          time: "30 min",
          serves: 4
        },
        {
          name: "Moussaka",
          region: "Greece",
          ingredients: "Eggplants, ground lamb, tomatoes, onions, béchamel sauce",
          recipe: "Layer fried eggplants with lamb-tomato mix, top with béchamel, bake until golden.",
          time: "2 hours",
          serves: 8
        }
      ]
    },
    {
      name: "North America", 
      icon: "🦬",
      recipes: [
        {
          name: "Buffalo Wings",
          region: "USA",
          ingredients: "Chicken wings, hot sauce, butter, garlic, cayenne",
          recipe: "Fry wings, toss in hot sauce + butter mix.",
          time: "25 min",
          serves: 4
        },
        {
          name: "Poutine",
          region: "Canada", 
          ingredients: "Fries, cheese curds, gravy",
          recipe: "Place hot fries, top with curds, pour hot gravy to melt.",
          time: "15 min",
          serves: 4
        },
        {
          name: "Tacos",
          region: "Mexico",
          ingredients: "Corn tortillas, beef/chicken, lettuce, cheese, salsa",
          recipe: "Fill tortillas with cooked meat, toppings, and salsa.",
          time: "20 min",
          serves: 4
        }
      ]
    },
    {
      name: "South America",
      icon: "🦙",
      recipes: [
        {
          name: "Feijoada",
          region: "Brazil",
          ingredients: "Black beans, pork, sausage, onion, garlic, bay leaves", 
          recipe: "Simmer beans and meats with garlic and bay leaves until tender.",
          time: "3 hours",
          serves: 8
        },
        {
          name: "Empanadas",
          region: "Argentina",
          ingredients: "Dough, beef, onions, olives, boiled egg",
          recipe: "Fill dough with mixture, fold, seal, bake or fry.",
          time: "45 min",
          serves: 6
        },
        {
          name: "Ceviche",
          region: "Peru",
          ingredients: "Fresh fish, lime juice, chili, onion, coriander",
          recipe: "Marinate raw fish in lime until opaque. Mix with chili, onion, herbs.",
          time: "20 min",
          serves: 4
        }
      ]
    },
    {
      name: "Oceania",
      icon: "🏄‍♂️",
      recipes: [
        {
          name: "Meat Pie",
          region: "Australia/New Zealand",
          ingredients: "Minced beef, onions, flour, beef stock, puff pastry",
          recipe: "Cook beef filling, place in pastry, cover, bake.",
          time: "1 hour",
          serves: 4
        },
        {
          name: "Pavlova",
          region: "New Zealand", 
          ingredients: "Egg whites, sugar, cornstarch, vinegar, whipped cream, fruit",
          recipe: "Beat whites with sugar, bake low until crisp. Top with cream and fruit.",
          time: "1.5 hours",
          serves: 8
        },
        {
          name: "Lamingtons",
          region: "Australia",
          ingredients: "Sponge cake, chocolate icing, desiccated coconut",
          recipe: "Dip sponge cubes in chocolate, roll in coconut.",
          time: "30 min",
          serves: 12
        }
      ]
    },
    {
      name: "Antarctica",
      icon: "🐧",
      recipes: [
        {
          name: "Pemmican",
          region: "Explorer Survival Food",
          ingredients: "Dried meat, animal fat, dried berries, salt",
          recipe: "Pound dried meat, mix with melted fat and berries, form blocks.",
          time: "2 hours",
          serves: 10
        },
        {
          name: "Hardtack",
          region: "Preserved Bread",
          ingredients: "Flour, water, salt",
          recipe: "Mix, roll, cut into squares, bake until very dry.",
          time: "30 min",
          serves: 20
        },
        {
          name: "Bannock",
          region: "Polar Bread",
          ingredients: "Flour, baking powder, water, fat, salt",
          recipe: "Mix dough, fry or bake on hot pan until cooked.",
          time: "15 min",
          serves: 4
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recipes
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            World Continental Recipe Booklet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A culinary journey across all seven continents, featuring traditional dishes from every corner of our planet
          </p>
        </div>

        {/* Continents */}
        <div className="space-y-12">
          {continents.map((continent, index) => (
            <div key={continent.name}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{continent.icon}</span>
                <h2 className="text-3xl font-bold text-primary">{continent.name}</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {continent.recipes.map((recipe, recipeIndex) => (
                  <Card key={recipeIndex} className="h-full border-accent/20 hover:border-accent/40 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl text-primary">{recipe.name}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{recipe.region}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{recipe.serves} servings</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Ingredients:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{recipe.ingredients}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Recipe:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{recipe.recipe}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {index < continents.length - 1 && (
                <Separator className="mt-12" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-accent/20">
          <p className="text-sm text-muted-foreground">
            🌎 From the bustling markets of Africa to the frozen landscapes of Antarctica 🐧
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            A celebration of global culinary traditions and survival foods from every continent
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBooklet;