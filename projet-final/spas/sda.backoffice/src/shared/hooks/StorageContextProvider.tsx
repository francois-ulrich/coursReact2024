import { PropsWithChildren, useEffect, useState } from "react";
import {
  MutableStorageContext,
  StorageContext,
  StorageContextState,
  StorageObject,
} from "./storageContext";

export const StorageContextProvider = (props: PropsWithChildren) => {
  const initialStateValue: StorageObject = {};

  Object.keys(localStorage).forEach((key) => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue == null) return;

    initialStateValue[key] = localStorageValue;
  });

  const [state, setState] = useState<StorageContextState>({
    value: initialStateValue,
  });

  const getItem = (key: string): string | null => {
    if (!Object.hasOwn(state.value, key)) return null;

    return initialStateValue[key];
  };

  const setItem = (key: string, value: string) => {
    setState({
      value: {
        ...state.value,
        [key]: value,
      },
    });
  };

  const removeItems = (keys: string[]) => {
    const newStateValue = { ...state.value };

    keys.forEach((key) => {
      if (!(key in state.value)) return;
      delete newStateValue[key];
      localStorage.removeItem(key);
    });

    setState({
      value: newStateValue,
    });
  };

  useEffect(() => {
    if (state.value == null) return;

    for (const [key, storageValue] of Object.entries(state.value)) {
      localStorage.setItem(key, storageValue);
    }
  }, [state]);

  const context: MutableStorageContext = {
    state,
    setState,
    getItem,
    setItem,
    removeItems,
  };

  return (
    <StorageContext.Provider value={context}>
      {props.children}
    </StorageContext.Provider>
  );
};
