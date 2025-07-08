
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
            <Sparkles className="w-5 h-5 text-orange-500" />
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
            <p className="text-sm text-gray-600 mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestionChips.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 px-2"
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
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
          >
            <Sparkles className="w-4 h-4 mr-1" />
            Improve Recipe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
