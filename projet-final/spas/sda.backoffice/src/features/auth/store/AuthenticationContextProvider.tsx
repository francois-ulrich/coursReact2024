import { PropsWithChildren, useEffect, useState } from "react";
import {
  AuthenticationContext,
  AuthenticationContextState,
  MutableAuthenticationContext,
} from "./authenticationContext";
// import { useStorageContext } from "../../../shared/hooks/storageContext";
import business from "../services/auth.application";
import { LoginFormData } from "../custom-types";
// import { User } from "../models";

export const AuthenticationContextProvider = (props: PropsWithChildren) => {
  // const storageContext = useStorageContext();
  // const navigate = useNavigate();

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
      // if (storageContext.setItems === null) return;
      const { email, username } = res;
      // storageContext.setItems({
      //   tokenType,
      //   accessToken,
      //   expiresIn: String(expiresIn),
      //   refreshToken,
      // });
      // console.log(res);
      // setStateFromRes(res);
      // navigate("/");

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
    // if (storageContext.removeItems == null) return;

    // storageContext.removeItems([
    //   "tokenType",
    //   "accessToken",
    //   "expiresIn",
    //   "refreshToken",
    // ]);

    setState({
      ...state,
      user: {
        email: null,
        username: null,
      },
      authenticated: false,
    });
  };

  useEffect(() => {
    business.getAuthenticatedUser().then((res) => {
      console.log(res);

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
