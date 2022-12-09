import React,{createContext,useContext,useReducer} from "react";

// prepare thw data layer
export const StateContext = createContext();

// wrap app and provide to data layer
export const StateProvider= ({ reducer ,initialState ,children}) =>(
    <StateContext.Provider value={useReducer( reducer , initialState)}>
    {children}

    </StateContext.Provider>
);
//  pull information from data layer
export const useStateValue=() => useContext(StateContext);
