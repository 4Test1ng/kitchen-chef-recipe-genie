
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            Improve Your Recipe
          </DialogTitle>
          <DialogDescription>
            Tell us how you'd like to modify this recipe and our AI will create an improved version.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Textarea
            placeholder="e.g., make it vegetarian, add more spices, double the recipe..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestionChips.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 px-2 border-border hover:bg-accent/60"
                  onClick={() => setFeedback(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={handleClose}
            className="border-border"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="bg-[var(--gradient-button)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            Improve Recipe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
