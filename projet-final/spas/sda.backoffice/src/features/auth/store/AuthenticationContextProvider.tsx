import { PropsWithChildren, useEffect, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextState,
  MutableAuthenticationContext,
} from "./authenticationContext";
import { useStorageContext } from "../../../shared/hooks/storageContext";
import business from "../services/auth.application";
import { DummyAuth } from "../services/auth.infrastructure";
// import { DummyAuth } from "../services/auth.infrastructure";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
  const storageContext = useStorageContext();

  // Initialize
  const [state, setState] = useState<AuthenticationContextState>({
    user: {
      email: null,
      firstName: null,
      lastName: null,
      username: null,
    },
    authenticated: false,
  });

  const logIn = (username: string, password: string) => {
    business.login(username, password).then((res) => {
      if (storageContext.setItem === null) return;
      const { accessToken } = res;
      storageContext.setItem("accessToken", accessToken);
      setStateFromRes(res);
    });
  };

  const logOut = () => {
    if (storageContext.removeItems == null) return;

    storageContext.removeItems(["accessToken"]);

    setState({
      ...state,
      user: {
        email: null,
        firstName: null,
        lastName: null,
        username: null,
      },
      authenticated: false,
    });
  };

  const setStateFromRes = (res: DummyAuth) => {
    const { username, email, firstName, lastName } = res;

    setState((prevState) => ({
      ...prevState,
      user: {
        email,
        firstName,
        lastName,
        username,
      },
      authenticated: true,
    }));
  };

  useEffect(() => {
    if (storageContext.getItem == null) return;

    const accessToken = storageContext.getItem("accessToken");

    if (!accessToken) return;

    business.getAuthenticatedUser(accessToken).then((res) => {
      setStateFromRes(res);
    });
  }, [storageContext]);

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
