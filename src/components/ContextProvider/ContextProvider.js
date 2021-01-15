import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [orderData, setOrderData] = useState([
    {
      foodName: "",
      totalPrice: 0,
      allergy: "",
      allergyText: "",
      except: [],
      add: [],
    },
  ]);
  const [count, setCount] = useState(1);

  return (
    <Context.Provider
      value={{
        favorite,
        setFavorite,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        logInSuccess,
        setLogInSuccess,
        orderData,
        setOrderData,
        count,
        setCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
