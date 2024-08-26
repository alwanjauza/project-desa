import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check if user is authenticated when the app loads
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token or fetch user data from server if needed
      setAuth(true); // Assuming token is valid
    } else {
      setAuth(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
