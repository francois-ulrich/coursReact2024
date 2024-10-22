import { PropsWithChildren, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextState,
  MutableAuthenticationContext,
} from "./authenticationContext";
import { useStorageContext } from "../../../shared/hooks/storageContext";
// import { User } from "../models";
import business from "../services/auth.application";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
  const storageContext = useStorageContext();

  // Initialize
  let initialStorageStateValue: AuthenticationContextState = {
    user: {
      accessToken: null,
      email: null,
      firstName: null,
      lastName: null,
      username: null,
    },
  };

  if (storageContext.getItem != null) {
    initialStorageStateValue = {
      user: {
        ...initialStorageStateValue.user,
        accessToken: storageContext.getItem("accessToken"),
        email: storageContext.getItem("email"),
        firstName: storageContext.getItem("firstName"),
        lastName: storageContext.getItem("lastName"),
        username: storageContext.getItem("username"),
      },
    };
  }

  const [state, setState] = useState<AuthenticationContextState>(
    initialStorageStateValue
  );

  const logIn = (username: string, password: string) => {
    business.login(username, password).then((res) => {
      if (context.setState === null) return;
      context.setState({ user: res });

      if (storageContext.setState === null) return;
      const {
        accessToken,
        username,
        // email,
        // firstName,
        // lastName,
        // refreshToken,
      } = res;
      storageContext.setState({
        value: {
          ...storageContext.state.value,
          accessToken,
          username,
          // email,
          // firstName,
          // lastName,
          // refreshToken,
        },
      });
    });
  };

  const logOut = () => {
    if (storageContext.removeItems == null) return;

    storageContext.removeItems(["username", "accessToken"]);
  };

  // const context: MutableAuthenticationContext = { state, setState };
  const context: MutableAuthenticationContext = {
    state,
    setState,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={context}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
