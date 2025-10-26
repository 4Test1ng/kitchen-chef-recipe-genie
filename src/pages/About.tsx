import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Sparkles, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="glass-card p-4 rounded-full">
            <ChefHat className="h-16 w-16 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">About AiChef</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transforming the way people cook with the power of artificial intelligence
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            AiChef was created to make cooking accessible, enjoyable, and creative for everyone. 
            We believe that with the right tools and guidance, anyone can create delicious meals 
            from the ingredients they have on hand. Our AI-powered platform turns the challenge 
            of "what should I cook?" into an exciting culinary adventure.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            What We Do
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed">
            AiChef uses advanced artificial intelligence to generate personalized recipes based on 
            your available ingredients, dietary preferences, and cooking skill level. Whether you're 
            a beginner or an experienced cook, our platform adapts to your needs.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generate custom recipes from your ingredients</li>
            <li>Explore authentic cuisines from around the world</li>
            <li>Save and organize your favorite recipes</li>
            <li>Get step-by-step cooking instructions</li>
            <li>Scale recipes for any number of servings</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Our Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed mb-4">
            AiChef has grown into a vibrant community of food enthusiasts, home cooks, and 
            culinary explorers. Our users have generated over 50,000 recipes and continue 
            to discover new flavors and cooking techniques every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Cooks</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Recipes Generated</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Our Technology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">
            Powered by cutting-edge AI technology, AiChef understands the relationships between 
            ingredients, cooking techniques, and flavor profiles. Our algorithms consider nutritional 
            balance, cooking times, and cultural authenticity to create recipes that are not just 
            possible, but delicious and practical.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
