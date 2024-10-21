import { PropsWithChildren, useState } from "react";
import {
  AuthenticatedUserContext,
  AuthenticatedUserContextState,
  MutableAuthenticatedUserContext,
} from "./authenticatedUserContext";
import { useStorageContext } from "../../../shared/hooks/storageContext";

export const AuthenticatedUserContextProvider = (props: PropsWithChildren) => {
  const storageContext = useStorageContext();

  let initialStorageStateValue: AuthenticatedUserContextState = {
    accessToken: null,
    email: null,
    firstName: null,
    lastName: null,
    username: null,
  };

  if (storageContext.getItem != null) {
    initialStorageStateValue = {
      ...initialStorageStateValue,
      accessToken: storageContext.getItem("accessToken"),
      email: storageContext.getItem("email"),
      firstName: storageContext.getItem("firstName"),
      lastName: storageContext.getItem("lastName"),
      username: storageContext.getItem("username"),
    };
  }

  const [state, setState] = useState<AuthenticatedUserContextState>(
    initialStorageStateValue
  );

  const context: MutableAuthenticatedUserContext = { state, setState };

  return (
    <AuthenticatedUserContext.Provider value={context}>
      {props.children}
    </AuthenticatedUserContext.Provider>
  );
};
