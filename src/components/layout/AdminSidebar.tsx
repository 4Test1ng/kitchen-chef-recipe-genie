import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  ChefHat, 
  BookOpen, 
  MessageSquare, 
  BarChart3,
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Dishes", path: "/admin/dishes", icon: ChefHat },
  { name: "Recipes", path: "/admin/recipes", icon: BookOpen },
  { name: "Feedback", path: "/admin/feedback", icon: MessageSquare },
  { name: "Analytics", path: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

export const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Admin Panel</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};