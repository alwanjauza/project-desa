import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // Check if user is authenticated when the app loads
    const user = localStorage.getItem("user");

    if (user) {
      const { token } = JSON.parse(user);

      if (token) {
        // Decode the token to get the expiration time
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining > 0) {
          setAuth(true); // Assuming token is valid

          // Set a timeout to auto-logout when the token expires
          const logoutTimer = setTimeout(() => {
            logout();
          }, timeRemaining);

          // Clear the timeout when the component unmounts or the effect is re-run
          return () => clearTimeout(logoutTimer);
        } else {
          logout(); // Token is expired, logout immediately
        }
      }
    } else {
      setAuth(false);
    }
  }, []);

  const login = (id, name, token, role) => {
    const userData = {
      id,
      name,
      token,
      role,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setAuth(true);
  };

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
