// src/hooks/useAuth.js
import { useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  // Check if the user is authenticated
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get("/api/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error verifying authentication:", error);
      setUser(null);
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    checkAuth,
  };
};
