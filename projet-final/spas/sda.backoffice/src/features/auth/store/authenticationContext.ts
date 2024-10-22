import { createContext, useContext } from "react";
import { User } from "../models";

export interface AuthenticationContextState {
  user: User | null;
  authenticated: boolean;
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
      email: null,
      firstName: null,
      lastName: null,
      username: null,
    },
    authenticated: false,
  },
  setState: null,
  logIn: null,
  logOut: null,
};

export const AuthenticationContext =
  createContext<MutableAuthenticationContext>(initialContextState);

export const useAuthenticationContext = () => useContext(AuthenticationContext);
