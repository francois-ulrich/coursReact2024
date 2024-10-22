import { createContext, useContext } from "react";
// import { StorageValue } from "../../../shared/types";
import { User } from "../models";

export interface AuthenticationContextState {
  user: User | null;
}

export interface MutableAuthenticationContext {
  state: AuthenticationContextState;
  setState: React.Dispatch<
    React.SetStateAction<AuthenticationContextState>
  > | null;
  logIn: ((username: string, password: string) => void) | null;
  logOut: (() => void) | null;
}

const initialContextState: MutableAuthenticationContext = {
  state: {
    user: {
      accessToken: null,
      email: null,
      firstName: null,
      lastName: null,
      username: null,
    },
  },
  setState: null,
  logIn: null,
  logOut: null,
};

export const AuthenticationContext =
  createContext<MutableAuthenticationContext>(initialContextState);

export const useAuthenticationUserContext = () =>
  useContext(AuthenticationContext);
