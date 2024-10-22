import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticationUserContext } from "../../features/auth/store/authenticationContext";

type PrivateRoutesProps<P = unknown> = P & {
  children: ReactNode;
};

export const PrivateRoute = (props: PrivateRoutesProps) => {
  const context = useAuthenticationUserContext();

  if (context.state.authenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return <div>{props.children}</div>;
};
