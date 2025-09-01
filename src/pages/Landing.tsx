import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Sparkles, Globe, Heart, Star, Users } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Recipes",
      description: "Generate personalized recipes from your ingredients using advanced AI technology."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "World Cuisines",
      description: "Explore authentic recipes from every continent and discover new flavors."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Save Favorites",
      description: "Keep track of your favorite recipes and build your personal cookbook."
    }
  ];

  const stats = [
    { icon: <Star className="h-5 w-5" />, label: "Recipe Quality", value: "5-Star" },
    { icon: <Users className="h-5 w-5" />, label: "Happy Cooks", value: "10K+" },
    { icon: <ChefHat className="h-5 w-5" />, label: "Recipes Generated", value: "50K+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="glass-card p-4 rounded-full">
                <ChefHat className="h-16 w-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Transform Your
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"> Kitchen </span>
              with AI
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Turn your ingredients into delicious recipes instantly. Discover world cuisines, 
              save favorites, and cook like a chef with AI-powered culinary assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover-lift">
                <Link to="/generate">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Cooking Now
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover-lift">
                <Link to="/recipe-booklet">
                  <Globe className="mr-2 h-5 w-5" />
                  Explore World Cuisines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose AiChef?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of cooking with intelligent recipe generation and global cuisine exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card-hover group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Culinary Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who have transformed their kitchens with AI-powered recipes.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 hover-glow">
            <Link to="/generate">
              <ChefHat className="mr-2 h-5 w-5" />
              Generate Your First Recipe
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;