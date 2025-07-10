
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';

interface RecipeImproveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImprove: (feedback: string) => void;
}

export const RecipeImproveDialog: React.FC<RecipeImproveDialogProps> = ({
  open,
  onOpenChange,
  onImprove
}) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      onImprove(feedback.trim());
      setFeedback('');
    }
  };

  const handleClose = () => {
    setFeedback('');
    onOpenChange(false);
  };

  const suggestionChips = [
    "Make it vegetarian",
    "Add more spices",
    "Make it healthier",
    "Double the recipe",
    "Make it vegan",
    "Reduce cooking time",
    "Add more protein",
    "Make it gluten-free"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg glass-card">
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10 animate-pulse-glow">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-xl">Enhance Your Recipe</span>
              <p className="text-sm text-muted-foreground font-normal">AI-powered recipe optimization</p>
            </div>
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            Describe how you'd like to modify this recipe, and our AI will create an enhanced version tailored to your preferences.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Your improvements</label>
            <Textarea
              placeholder="e.g., make it vegetarian, add more spices, double the recipe, make it healthier..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[120px] resize-none bg-background/50 border-border/50 focus:border-primary transition-colors"
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Quick suggestions</label>
            <div className="grid grid-cols-2 gap-2">
              {suggestionChips.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 justify-start hover:bg-primary/10 hover:border-primary transition-colors"
                  onClick={() => setFeedback(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="hover:bg-accent/50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="gradient-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Enhance Recipe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
