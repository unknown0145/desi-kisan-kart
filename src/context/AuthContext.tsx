
import React, { createContext, useState, useContext, ReactNode } from "react";

type UserType = "customer" | "farmer" | null;

interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: UserType) => void;
  register: (name: string, email: string, password: string, userType: UserType) => void;
  logout: () => void;
  isAuthenticated: boolean;
  userType: UserType;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);

  const login = (email: string, password: string, userType: UserType) => {
    // In a real app, you would verify credentials with an API
    // For now, we'll simulate a successful login
    const mockUser = {
      id: userType === "farmer" ? "f123" : "c456",
      name: userType === "farmer" ? "Rakesh Singh" : "Anita Sharma",
      email,
      type: userType,
    };
    
    setUser(mockUser);
    setUserType(userType);
    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("userType", userType || "");
  };

  const register = (name: string, email: string, password: string, userType: UserType) => {
    // In a real app, you would send this data to an API
    // For now, we'll simulate a successful registration followed by login
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      type: userType,
    };
    
    setUser(newUser);
    setUserType(userType);
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("userType", userType || "");
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
  };

  React.useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    const storedUserType = localStorage.getItem("userType") as UserType;
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setUserType(storedUserType);
    }
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    userType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
