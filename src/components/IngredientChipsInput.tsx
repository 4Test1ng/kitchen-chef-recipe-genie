import React from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface IngredientChipsInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const IngredientChipsInput: React.FC<IngredientChipsInputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [chips, setChips] = React.useState<string[]>([]);

  // Sync internal chips when external value changes
  React.useEffect(() => {
    const next = value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    setChips(next);
  }, [value]);

  const emit = (nextChips: string[]) => {
    setChips(nextChips);
    onChange(nextChips.join(", "));
  };

  const addChip = () => {
    const v = inputValue.trim();
    if (!v) return;
    if (chips.includes(v)) {
      setInputValue("");
      return;
    }
    emit([...chips, v]);
    setInputValue("");
  };

  const removeChip = (index: number) => {
    const next = chips.filter((_, i) => i !== index);
    emit(next);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addChip();
    } else if (e.key === "Backspace" && !inputValue && chips.length) {
      // Remove last chip when backspacing on empty input
      removeChip(chips.length - 1);
    }
  };

  return (
    <div className={cn("rounded-md border border-input bg-background p-2", className)}>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, i) => (
          <Badge key={`${chip}-${i}`} variant="secondary" className="gap-1">
            {chip}
            <button
              type="button"
              aria-label={`Remove ${chip}`}
              onClick={() => removeChip(i)}
              className="ml-1 inline-flex items-center justify-center rounded-sm hover:opacity-80"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <div className="flex-1 min-w-[160px] flex items-center gap-2">
          <Input
            aria-label="Add ingredient"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className="h-8 bg-background/50 border-0 focus-visible:ring-0 px-0"
          />
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={addChip}
            aria-label="Add ingredient"
            className="h-8 px-2"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
