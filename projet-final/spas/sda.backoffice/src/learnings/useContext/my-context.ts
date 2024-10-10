import { createContext, useContext } from "react";

// création du type d'état
export interface ContextState {
  value: string;
}

// état initial
export const initialContextState: ContextState = {
  value: "",
};

// creation du gestionnaire d'état
export const MyContext = createContext<ContextState>(initialContextState);

// custom hook
export const useMyContext = () => useContext(MyContext);
