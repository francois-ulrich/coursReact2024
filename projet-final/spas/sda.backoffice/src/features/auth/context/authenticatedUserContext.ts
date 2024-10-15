import { createContext, useContext } from "react";

export interface AuthenticatedUserContextState {
  accessToken: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface MutableAuthenticatedUserContext {
  state: AuthenticatedUserContextState;
  setState: React.Dispatch<
    React.SetStateAction<AuthenticatedUserContextState>
  > | null;
}

const initialContextState: MutableAuthenticatedUserContext = {
  state: {
    accessToken: "",
    email: "",
    firstName: "",
    lastName: "",
    username: "",
  },
  setState: null,
};

export const AuthenticatedUserContext =
  createContext<MutableAuthenticatedUserContext>(initialContextState);

export const useAuthenticatedUserContext = () =>
  useContext(AuthenticatedUserContext);
