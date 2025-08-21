/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({children}) =>{
    const [scrollTraget, setScrollTraget] = useState(null);
    return(
        <ScrollContext.Provider value={{scrollTraget, setScrollTraget}}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () =>useContext();