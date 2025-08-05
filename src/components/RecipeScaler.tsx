import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Users } from 'lucide-react';

interface RecipeScalerProps {
  originalServings: number;
  onServingsChange: (newServings: number) => void;
}

export const RecipeScaler: React.FC<RecipeScalerProps> = ({
  originalServings,
  onServingsChange
}) => {
  const [currentServings, setCurrentServings] = useState(originalServings);

  const handleServingsChange = (newServings: number) => {
    if (newServings >= 1 && newServings <= 12) {
      setCurrentServings(newServings);
      onServingsChange(newServings);
    }
  };

  const scalingFactor = currentServings / originalServings;

  return (
    <Card className="glass-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="w-5 h-5 text-primary" />
          Recipe Scaling
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleServingsChange(currentServings - 1)}
              disabled={currentServings <= 1}
              className="h-8 w-8 p-0"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <div className="text-xl font-bold">{currentServings}</div>
              <div className="text-xs text-muted-foreground">servings</div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleServingsChange(currentServings + 1)}
              disabled={currentServings >= 12}
              className="h-8 w-8 p-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          {scalingFactor !== 1 && (
            <Badge variant="secondary" className="text-xs">
              {scalingFactor > 1 ? `${scalingFactor}x larger` : `${(1/scalingFactor).toFixed(1)}x smaller`}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};