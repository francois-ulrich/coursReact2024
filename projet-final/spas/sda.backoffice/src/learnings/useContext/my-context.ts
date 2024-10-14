import { createContext, useContext } from "react";

// création du type d'état
export interface ContextState {
  value: string;
}

export interface MutableContext {
  state: ContextState;
  setState: React.Dispatch<React.SetStateAction<ContextState>> | null;
}

// état initial
export const initialContextState: MutableContext = {
  state: { value: "" },
  setState: null,
};

// creation du gestionnaire d'état
export const MyContext = createContext<MutableContext>(initialContextState);

// custom hook
export const useMyContext = () => useContext(MyContext);
