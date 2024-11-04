import { createContext, useContext } from "react";
import { User } from "../models";
import { LoginFormData } from "../custom-types";

export interface AuthenticationContextState {
  user: User | null;
  authenticated: boolean;
}

export interface MutableAuthenticationContext {
  state: AuthenticationContextState;
  setState: React.Dispatch<
    React.SetStateAction<AuthenticationContextState>
  > | null;
  logIn: ((formLoginData: LoginFormData) => void) | null;
  logOut: (() => void) | null;
}

const initialContextState: MutableAuthenticationContext = {
  state: {
    user: {
      email: null,
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
