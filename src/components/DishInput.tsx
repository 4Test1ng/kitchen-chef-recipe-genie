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

import { getDishSuggestions } from '@/data/dishLibrary';

const DISH_SUGGESTIONS = getDishSuggestions();

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
    <div ref={containerRef} className={cn("relative w-full z-50", className)}>
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
        <div className="absolute z-[9999] w-full mt-1 bg-card dark:bg-card border border-border rounded-md shadow-2xl animate-fade-in backdrop-blur-sm">
          <ScrollArea className="max-h-60">
            <div className="p-2">
              {filteredSuggestions.length > 0 ? (
                <div className="space-y-1">
                  {filteredSuggestions.map((dish, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors flex items-center gap-2 bg-card text-card-foreground"
                      onClick={() => handleSuggestionClick(dish)}
                    >
                      <ChefHat className="w-4 h-4 text-gray-500" />
                      {dish}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-4 text-sm text-muted-foreground text-center bg-card rounded-md">
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