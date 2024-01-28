import { createContext, useContext, useState } from "react";
import * as authService from "./authServices.js";

const AuthContext = createContext();

console.log(authService);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    const newUser = await authService.register(userData);
    setUser(newUser);
  };

  const login = async (credentials) => {
    const authenticatedUser = await authService.login(credentials);
    setUser(authenticatedUser);
  };

  const logout = async () => {
    // Add any additional cleanup or API calls on logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
