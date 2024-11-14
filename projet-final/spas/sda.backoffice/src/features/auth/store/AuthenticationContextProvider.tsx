import { PropsWithChildren, useEffect, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextState,
  MutableAuthenticationContext,
} from "./authenticationContext";
import business from "../services/auth.application";
import { LoginFormData } from "../custom-types";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
  // Initialize
  const [state, setState] = useState<AuthenticationContextState>({
    user: {
      email: null,
      username: null,
    },
    authenticated: false,
  });

  const logIn = (formLoginData: LoginFormData) => {
    business.login(formLoginData).then((res) => {
      const { email, username } = res;

      setState({
        ...state,
        user: {
          email,
          username,
        },
        authenticated: true,
      });
    });
  };

  const logOut = () => {
    setState({
      ...state,
      user: {
        email: null,
        username: null,
      },
      authenticated: false,
    });
  };

  const logInAuto = async () => {
    // const response = await business.getAuthenticatedUser();

    try {
      const result = await business.getAuthenticatedUser();

      const { email, username } = result.data;

      setState({
        ...state,
        user: {
          email,
          username,
        },
        authenticated: true,
      });

      console.log("connected !");
    } catch (error) {
      console.log("Error:", error);

      console.log("unconnected");
    }

    // console.log(response);
    // console.log("ag");
    // const { email, username } = res;
    // setState({
    //   ...state,
    //   user: {
    //     email,
    //     username,
    //   },
    //   authenticated: true,
    // });
  };

  useEffect(() => {
    logInAuto();
  }, []);

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
