import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChefHat, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DishInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DISH_SUGGESTIONS = [
  // Italian
  "Spaghetti Carbonara", "Margherita Pizza", "Chicken Parmesan", "Fettuccine Alfredo", "Lasagna", "Risotto", "Osso Buco", "Tiramisu",
  // Asian - Chinese
  "Chicken Fried Rice", "Sweet and Sour Pork", "Kung Pao Chicken", "Beef and Broccoli", "Dumplings", "Hot Pot", "Peking Duck",
  // Asian - Thai
  "Pad Thai", "Green Curry", "Tom Yum Soup", "Massaman Curry", "Mango Sticky Rice", "Som Tam", "Thai Basil Stir Fry",
  // Asian - Japanese
  "Sushi Rolls", "Ramen", "Teriyaki Chicken", "Tempura", "Miso Soup", "Katsu Curry", "Yakitori", "Udon",
  // Asian - Korean
  "Kimchi Fried Rice", "Bulgogi", "Bibimbap", "Korean BBQ", "Japchae", "Tteokbokki",
  // Asian - Indian
  "Butter Chicken", "Chicken Curry", "Biryani", "Samosas", "Naan Bread", "Palak Paneer", "Tandoori Chicken", "Dal",
  // American
  "Grilled Cheese Sandwich", "Chocolate Chip Cookies", "Caesar Salad", "BBQ Ribs", "Mac and Cheese", "Buffalo Wings", "Apple Pie", "Cheeseburger",
  // Mexican/Latin American
  "Chicken Tacos", "Guacamole", "Quesadillas", "Enchiladas", "Burritos", "Fajitas", "Ceviche", "Churros", "Tamales",
  // European - French
  "Coq au Vin", "French Onion Soup", "Croissants", "Quiche Lorraine", "Beef Bourguignon", "Crème Brûlée", "Ratatouille",
  // European - Spanish
  "Paella", "Gazpacho", "Patatas Bravas", "Jamón Ibérico", "Tortilla Española", "Sangria",
  // European - German
  "Schnitzel", "Sauerbraten", "Pretzels", "Bratwurst", "Sauerkraut", "Black Forest Cake",
  // European - Greek
  "Moussaka", "Greek Salad", "Souvlaki", "Spanakopita", "Baklava", "Tzatziki",
  // Middle Eastern
  "Hummus", "Falafel", "Shawarma", "Kebabs", "Tabbouleh", "Baklava", "Stuffed Grape Leaves",
  // African
  "Couscous", "Tagine", "Jollof Rice", "Injera", "Bobotie", "Bunny Chow", "Moroccan Chicken",
  // Australian/Oceanian
  "Meat Pie", "Lamington", "Pavlova", "Fish and Chips", "Anzac Biscuits",
  // Popular comfort foods
  "Chicken Soup", "Pancakes", "French Toast", "Meatloaf", "Shepherd's Pie", "Fish and Chips", "Fried Chicken"
];

export const DishInput: React.FC<DishInputProps> = ({
  value,
  onChange,
  placeholder = "Enter a dish name (e.g., Chicken Parmesan, Pad Thai, Tacos)",
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.trim()) {
      const filtered = DISH_SUGGESTIONS.filter(dish =>
        dish.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8);
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(DISH_SUGGESTIONS.slice(0, 8));
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleSuggestionClick = (dish: string) => {
    onChange(dish);
    setIsOpen(false);
  };

  const clearInput = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearInput}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-background/80"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
      
      {isOpen && (
        <div className="absolute z-[60] w-full mt-1 bg-background/95 backdrop-blur-sm border border-border rounded-md shadow-xl animate-fade-in">
          <ScrollArea className="max-h-60">
            <div className="p-2">
              {filteredSuggestions.length > 0 ? (
                <div className="space-y-1">
                  {filteredSuggestions.map((dish, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 bg-background/80"
                      onClick={() => handleSuggestionClick(dish)}
                    >
                      <ChefHat className="w-4 h-4 text-muted-foreground" />
                      {dish}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-4 text-sm text-muted-foreground text-center bg-background/80 rounded-md">
                  No dishes found. Try typing a different dish name.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};