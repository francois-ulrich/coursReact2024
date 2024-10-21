import { createContext, useContext } from "react";
import { StorageValue } from "../../../shared/types";

export interface AuthenticatedUserContextState {
  accessToken: StorageValue;
  email: StorageValue;
  firstName: StorageValue;
  lastName: StorageValue;
  username: StorageValue;
}

export interface MutableAuthenticatedUserContext {
  state: AuthenticatedUserContextState;
  setState: React.Dispatch<
    React.SetStateAction<AuthenticatedUserContextState>
  > | null;
}

const initialContextState: MutableAuthenticatedUserContext = {
  state: {
    accessToken: null,
    email: null,
    firstName: null,
    lastName: null,
    username: null,
  },
  setState: null,
};

export const AuthenticatedUserContext =
  createContext<MutableAuthenticatedUserContext>(initialContextState);

export const useAuthenticatedUserContext = () =>
  useContext(AuthenticatedUserContext);
