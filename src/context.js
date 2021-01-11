import React, { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider value={"hi"}>{children}</Context.Provider>;
};

export default ContextProvider;
