import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: 'user' | 'admin';
  is_active: boolean;
  profile_image_url?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mockup data for testing
const mockUsers: (User & { password: string })[] = [
  {
    id: 1,
    email: "admin@aichef.com",
    password: "admin123",
    first_name: "Admin",
    last_name: "User",
    role: "admin",
    is_active: true
  },
  {
    id: 2,
    email: "john.doe@example.com", 
    password: "user123",
    first_name: "John",
    last_name: "Doe",
    role: "user",
    is_active: true
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('aichef_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('aichef_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('aichef_user');
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    // Simulate API call
    const newUser: User = {
      id: mockUsers.length + 1,
      email: userData.email!,
      first_name: userData.first_name!,
      last_name: userData.last_name!,
      role: 'user',
      is_active: true
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('aichef_user', JSON.stringify(newUser));
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};