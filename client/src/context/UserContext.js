// src/context/UserContext.js
import React, { useState, useEffect } from "react";

// Create context
const UserContext = React.createContext();

function UserProvider ({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [errors, setErrors] = useState([])

  //Auto Login
  useEffect(() => {
    fetch("/me")
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
        //data.error ? setLoggedIn(false) : setLoggedIn(true)
  }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup, loggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
