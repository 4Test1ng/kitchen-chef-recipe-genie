import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MoreHorizontal, Plus, Clock, Users, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DishForm from "@/features/dishes/components/DishForm";
import ConfirmDialog from "@/components/ConfirmDialog";

// Mock dishes data
const mockDishes = [
  {
    id: 1,
    name: "Pasta Carbonara",
    continent: "Europe",
    country: "Italy",
    description: "Classic Italian pasta dish with eggs, cheese, and pancetta",
    prep_time_minutes: 15,
    cook_time_minutes: 20,
    servings: 4,
    difficulty: "Medium" as const,
    is_featured: true,
    is_active: true,
    tags: ["Italian", "Pasta", "Traditional"],
    created_at: "2024-01-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Pad Thai",
    continent: "Asia",
    country: "Thailand",
    description: "Popular Thai stir-fried noodle dish",
    prep_time_minutes: 20,
    cook_time_minutes: 15,
    servings: 4,
    difficulty: "Medium" as const,
    is_featured: true,
    is_active: true,
    tags: ["Thai", "Stir-fry", "Spicy"],
    created_at: "2024-01-02T11:00:00Z"
  },
  {
    id: 3,
    name: "Beef Tacos",
    continent: "North America",
    country: "Mexico", 
    description: "Traditional Mexican tacos with seasoned beef",
    prep_time_minutes: 10,
    cook_time_minutes: 15,
    servings: 6,
    difficulty: "Easy" as const,
    is_featured: false,
    is_active: true,
    tags: ["Mexican", "Beef", "Quick"],
    created_at: "2024-01-03T12:00:00Z"
  },
  {
    id: 4,
    name: "Coq au Vin",
    continent: "Europe",
    country: "France",
    description: "French braised chicken dish cooked with wine",
    prep_time_minutes: 30,
    cook_time_minutes: 90,
    servings: 6,
    difficulty: "Hard" as const,
    is_featured: false,
    is_active: false,
    tags: ["French", "Chicken", "Wine"],
    created_at: "2024-01-04T13:00:00Z"
  }
];

const continents = ["All", "Africa", "Asia", "Europe", "North America", "South America", "Oceania"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const AdminDishes = () => {
  const [dishes, setDishes] = useState(mockDishes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const { toast } = useToast();

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = selectedContinent === "All" || dish.continent === selectedContinent;
    const matchesDifficulty = selectedDifficulty === "All" || dish.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesContinent && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'default';
      case 'Medium': return 'secondary';
      case 'Hard': return 'destructive';
      default: return 'outline';
    }
  };

  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<typeof mockDishes[number] | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleCreate = (values: any) => {
    const nextId = dishes.length ? Math.max(...dishes.map(d => d.id)) + 1 : 1;
    const newDish = {
      id: nextId,
      ...values,
      created_at: new Date().toISOString(),
    } as typeof mockDishes[number];
    setDishes(prev => [newDish, ...prev]);
    setCreateOpen(false);
    toast({ title: "Dish created" });
  };

  const handleEdit = (values: any) => {
    if (!selectedDish) return;
    setDishes(prev => prev.map(d => (d.id === selectedDish.id ? { ...d, ...values } : d)));
    setEditOpen(false);
    setSelectedDish(null);
    toast({ title: "Dish updated" });
  };

  const handleAskDelete = (dish: typeof mockDishes[number]) => {
    setSelectedDish(dish);
    setDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!selectedDish) return;
    setDishes(prev => prev.filter(d => d.id !== selectedDish.id));
    setDeleteOpen(false);
    setSelectedDish(null);
    toast({ title: "Dish deleted" });
  };

  const toggleActive = (id: number) => {
    setDishes(prev => prev.map(d => (d.id === id ? { ...d, is_active: !d.is_active } : d)));
  };

  const toggleFeatured = (id: number) => {
    setDishes(prev => prev.map(d => (d.id === id ? { ...d, is_featured: !d.is_featured } : d)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Continental Dishes</h1>
        <p className="text-muted-foreground">
          Manage your dish library and continental cuisine collection
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{dishes.length}</div>
            <p className="text-sm text-muted-foreground">Total Dishes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {dishes.filter(d => d.is_active).length}
            </div>
            <p className="text-sm text-muted-foreground">Active Dishes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {dishes.filter(d => d.is_featured).length}
            </div>
            <p className="text-sm text-muted-foreground">Featured Dishes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {new Set(dishes.map(d => d.continent)).size}
            </div>
            <p className="text-sm text-muted-foreground">Continents</p>
          </CardContent>
        </Card>
      </div>

      {/* Dishes Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Dish Library</CardTitle>
              <CardDescription>
                Manage continental dishes and recipes
              </CardDescription>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Dish
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Continent" />
              </SelectTrigger>
              <SelectContent>
                {continents.map(continent => (
                  <SelectItem key={continent} value={continent}>
                    {continent}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dish</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Servings</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDishes.map((dish) => (
                <TableRow key={dish.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {dish.name}
                        {dish.is_featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {dish.description}
                      </div>
                      <div className="flex gap-1 mt-1">
                        {dish.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{dish.country}</div>
                      <div className="text-sm text-muted-foreground">{dish.continent}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getDifficultyColor(dish.difficulty) as any}>
                      {dish.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-3 w-3" />
                      {dish.prep_time_minutes + dish.cook_time_minutes}m
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="h-3 w-3" />
                      {dish.servings}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={dish.is_active ? 'default' : 'secondary'}>
                      {dish.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Edit Dish
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          {dish.is_featured ? 'Remove from Featured' : 'Make Featured'}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {dish.is_active ? 'Deactivate' : 'Activate'}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete Dish
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <DishForm
        open={createOpen}
        onOpenChange={setCreateOpen}
        mode="create"
        onSubmit={handleCreate}
      />
      <DishForm
        open={editOpen}
        onOpenChange={(o) => {
          if (!o) setSelectedDish(null);
          setEditOpen(o);
        }}
        mode="edit"
        initialData={selectedDish ?? undefined}
        onSubmit={handleEdit}
      />
      <ConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Delete dish"
        description="This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AdminDishes;