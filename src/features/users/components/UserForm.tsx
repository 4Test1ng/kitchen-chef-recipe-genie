import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type UserFormValues = {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  role: "admin" | "user";
  is_active: boolean;
  email_verified: boolean;
};

interface UserFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  initialData?: UserFormValues;
  onSubmit: (values: UserFormValues) => void;
}

export default function UserForm({ open, onOpenChange, mode, initialData, onSubmit }: UserFormProps) {
  const [values, setValues] = useState<UserFormValues>({
    email: "",
    first_name: "",
    last_name: "",
    role: "user",
    is_active: true,
    email_verified: false,
  });

  useEffect(() => {
    if (open) {
      setValues(
        initialData ?? {
          email: "",
          first_name: "",
          last_name: "",
          role: "user",
          is_active: true,
          email_verified: false,
        }
      );
    }
  }, [open, initialData]);

  const handleChange = (key: keyof UserFormValues, value: any) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>{mode === "create" ? "Add User" : "Edit User"}</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First name</Label>
              <Input id="first_name" value={values.first_name} onChange={(e) => handleChange("first_name", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last_name">Last name</Label>
              <Input id="last_name" value={values.last_name} onChange={(e) => handleChange("last_name", e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={values.email} onChange={(e) => handleChange("email", e.target.value)} required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={values.role} onValueChange={(v: any) => handleChange("role", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="space-y-0.5">
                <Label>Active</Label>
              </div>
              <Switch checked={values.is_active} onCheckedChange={(v) => handleChange("is_active", v)} />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-md border p-3">
            <div className="space-y-0.5">
              <Label>Email Verified</Label>
            </div>
            <Switch checked={values.email_verified} onCheckedChange={(v) => handleChange("email_verified", v)} />
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
