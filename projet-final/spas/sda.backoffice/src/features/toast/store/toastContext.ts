import { ToastMessageOptions } from "primereact/toast";
import { createContext, useContext } from "react";

export interface MutableToastContext {
  show: ((options: ToastMessageOptions) => void) | null;
}

const initialContextState: MutableToastContext = {
  show: null,
};

export const ToastContext =
  createContext<MutableToastContext>(initialContextState);
export const useToastContext = () => useContext(ToastContext);
