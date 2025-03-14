/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";

// import React from 'react'
export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
