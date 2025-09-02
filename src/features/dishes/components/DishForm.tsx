import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export type DishFormValues = {
  id?: number;
  name: string;
  continent: string;
  country: string;
  description: string;
  prep_time_minutes: number;
  cook_time_minutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  is_featured: boolean;
  is_active: boolean;
  tags: string[];
};

const continents = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

interface DishFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  initialData?: DishFormValues;
  onSubmit: (values: DishFormValues) => void;
}

export default function DishForm({ open, onOpenChange, mode, initialData, onSubmit }: DishFormProps) {
  const [values, setValues] = useState<DishFormValues>({
    name: "",
    continent: "Europe",
    country: "",
    description: "",
    prep_time_minutes: 10,
    cook_time_minutes: 10,
    servings: 2,
    difficulty: "Easy",
    is_featured: false,
    is_active: true,
    tags: [],
  });

  useEffect(() => {
    if (open) {
      setValues(
        initialData ?? {
          name: "",
          continent: "Europe",
          country: "",
          description: "",
          prep_time_minutes: 10,
          cook_time_minutes: 10,
          servings: 2,
          difficulty: "Easy",
          is_featured: false,
          is_active: true,
          tags: [],
        }
      );
    }
  }, [open, initialData]);

  const handleChange = (key: keyof DishFormValues, value: any) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>{mode === "create" ? "Add Dish" : "Edit Dish"}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={values.name} onChange={(e) => handleChange("name", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select value={values.difficulty} onValueChange={(v: any) => handleChange("difficulty", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Continent</Label>
              <Select value={values.continent} onValueChange={(v: any) => handleChange("continent", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select continent" />
                </SelectTrigger>
                <SelectContent>
                  {continents.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" value={values.country} onChange={(e) => handleChange("country", e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={values.description} onChange={(e) => handleChange("description", e.target.value)} rows={3} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prep">Prep (min)</Label>
              <Input
                id="prep"
                type="number"
                min={0}
                value={values.prep_time_minutes}
                onChange={(e) => handleChange("prep_time_minutes", Number(e.target.value))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cook">Cook (min)</Label>
              <Input
                id="cook"
                type="number"
                min={0}
                value={values.cook_time_minutes}
                onChange={(e) => handleChange("cook_time_minutes", Number(e.target.value))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="servings">Servings</Label>
              <Input
                id="servings"
                type="number"
                min={1}
                value={values.servings}
                onChange={(e) => handleChange("servings", Number(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="space-y-0.5">
                <Label>Active</Label>
              </div>
              <Switch checked={values.is_active} onCheckedChange={(v) => handleChange("is_active", v)} />
            </div>
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="space-y-0.5">
                <Label>Featured</Label>
              </div>
              <Switch checked={values.is_featured} onCheckedChange={(v) => handleChange("is_featured", v)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              placeholder="e.g. Italian, Pasta, Traditional"
              value={values.tags.join(", ")}
              onChange={(e) => handleChange("tags", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{mode === "create" ? "Create" : "Save changes"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
