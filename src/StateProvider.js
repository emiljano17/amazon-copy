import React, { createContext, useContext, useReducer } from "react";

//Prepare datalayer
export const StateContext = createContext();

//Wrap app and provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from datalayer
export const useStateValue = () => useContext(StateContext);
