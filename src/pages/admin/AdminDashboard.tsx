import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { Users, ChefHat, BookOpen, TrendingUp, Star, MessageSquare } from "lucide-react";

// Mock analytics data
const mockAnalytics = {
  total_users: 150,
  active_users: 125,
  total_recipes_generated: 1250,
  total_dishes: 85,
  monthly_growth: {
    users: 12.5,
    recipes: 28.3,
    engagement: 15.7
  },
  popular_cuisines: [
    { name: "Italian", count: 245 },
    { name: "Asian", count: 198 },
    { name: "Mexican", count: 167 },
    { name: "French", count: 134 },
    { name: "Indian", count: 121 }
  ],
  recent_feedback: [
    { id: 1, user: "John D.", recipe: "Pasta Carbonara", rating: 5, comment: "Amazing recipe!" },
    { id: 2, user: "Jane S.", recipe: "Pad Thai", rating: 4, comment: "Great flavors" },
    { id: 3, user: "Mike R.", recipe: "Beef Tacos", rating: 5, comment: "Perfect for dinner" }
  ]
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your AiChef application performance
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={mockAnalytics.total_users.toString()}
          description={`+${mockAnalytics.monthly_growth.users}% from last month`}
          icon={Users}
        />
        <StatCard
          title="Active Users"
          value={mockAnalytics.active_users.toString()}
          description={`${((mockAnalytics.active_users / mockAnalytics.total_users) * 100).toFixed(1)}% engagement rate`}
          icon={TrendingUp}
        />
        <StatCard
          title="Generated Recipes"
          value={mockAnalytics.total_recipes_generated.toString()}
          description={`+${mockAnalytics.monthly_growth.recipes}% from last month`}
          icon={BookOpen}
        />
        <StatCard
          title="Continental Dishes"
          value={mockAnalytics.total_dishes.toString()}
          description="Available in library"
          icon={ChefHat}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Cuisines */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Cuisines</CardTitle>
            <CardDescription>
              Most requested cuisine types this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAnalytics.popular_cuisines.map((cuisine, index) => (
                <div key={cuisine.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-sm">#{index + 1}</span>
                    <span className="font-medium">{cuisine.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{cuisine.count}</div>
                    <div className="text-xs text-muted-foreground">recipes</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
            <CardDescription>
              Latest user reviews and ratings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAnalytics.recent_feedback.map((feedback) => (
                <div key={feedback.id} className="border-b border-border pb-3 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-sm">{feedback.user}</div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: feedback.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {feedback.recipe}
                  </div>
                  <div className="text-sm">{feedback.comment}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <Users className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Manage Users</h3>
              <p className="text-sm text-muted-foreground">
                View and manage user accounts
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <ChefHat className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Add Dishes</h3>
              <p className="text-sm text-muted-foreground">
                Add new continental dishes
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              <MessageSquare className="h-8 w-8 mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Review Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Check user feedback and ratings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;