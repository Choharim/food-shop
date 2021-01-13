import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <Context.Provider
      value={{
        favorite,
        setFavorite,
        users,
        setUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
