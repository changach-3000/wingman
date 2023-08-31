import React, { useState, useEffect } from "react";
import APPCONTEXT from "./APP";

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    initializeUserFromLocalStorage();
  }, []);

  const initializeUserFromLocalStorage = () => {
    try {
      const storedToken = localStorage.getItem("token");
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedToken) {
        setToken(storedToken);
      }

      if (storedUser) {
        setUser(storedUser);
      }

      if (storedToken && storedUser) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      // Handle potential exceptions here, such as JSON parsing errors
      console.error("Error initializing user from local storage:", error);
    } finally {
      setIsLoading(false); // Mark loading as complete regardless of success or failure
    }
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const setUserAndPersist = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const login = (token, user) => {
    setToken(token);
    setUserAndPersist(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  if (isLoading) {
    // Render a loading indicator or any other content while initializing
    return <p>Loading...</p>;
  }

  return (
    <APPCONTEXT.Provider value={{ user, isLoading, isLoggedIn, login, logout }}>
      {children}
    </APPCONTEXT.Provider>
  );
};

export default AuthProvider;
