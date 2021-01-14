import React, { createContext, useReducer, useContext } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const INITIAL_STATE = {
  currentSection: "test",
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_STATE);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider"
    );
  }
  return context;
};

export const useGlobalDispatchContext = () => {
  const context = useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalDispatchContext must be used within a GlobalDispatchProvider"
    );
  }
  return context;
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SECTION":
      return {
        ...state,
        currentSection: action.payload,
      };
    default:
      throw new Error(`Unhandle type action: ${action.type} `);
  }
};
