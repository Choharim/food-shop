import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: "", pw: "" });
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    extraAddress: "",
    zoneCode: "",
    address: "",
  });

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
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
