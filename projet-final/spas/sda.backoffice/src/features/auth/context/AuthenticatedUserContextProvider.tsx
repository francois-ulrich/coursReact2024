import { PropsWithChildren, useState } from "react";
import {
  AuthenticatedUserContext,
  AuthenticatedUserContextState,
  MutableAuthenticatedUserContext,
} from "./authenticatedUserContext";

export const AuthenticatedUserContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<AuthenticatedUserContextState>({
    accessToken: "",
    email: "",
    firstName: "",
    lastName: "",
    username: "",
  });

  const context: MutableAuthenticatedUserContext = { state, setState };

  return (
    <AuthenticatedUserContext.Provider value={context}>
      {props.children}
    </AuthenticatedUserContext.Provider>
  );
};
