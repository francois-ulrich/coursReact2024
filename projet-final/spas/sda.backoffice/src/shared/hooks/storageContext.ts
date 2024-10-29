import { createContext, useContext } from "react";
// import { StorageValue } from "../types";

export type StorageObject = {
  [key: string]: string;
};

export interface StorageContextState {
  value: StorageObject;
}

export interface MutableStorageContext {
  state: StorageContextState;
  setState: React.Dispatch<React.SetStateAction<StorageContextState>> | null;
  getItem: ((key: string) => string | null) | null;
  setItem: ((key: string, value: string) => void) | null;
  setItems: ((items: StorageObject) => void) | null;
  removeItems: ((key: string[]) => void) | null;
}

const initialContextState: MutableStorageContext = {
  state: { value: {} },
  setState: null,
  getItem: null,
  setItem: null,
  setItems: null,
  removeItems: null,
};

export const StorageContext =
  createContext<MutableStorageContext>(initialContextState);

export const useStorageContext = () => useContext(StorageContext);
