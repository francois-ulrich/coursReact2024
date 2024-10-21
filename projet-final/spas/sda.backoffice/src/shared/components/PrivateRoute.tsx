import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticatedUserContext } from "../../features/auth/context/authenticatedUserContext";

type PrivateRoutesProps<P = unknown> = P & {
  children: ReactNode;
};

export const PrivateRoute = (props: PrivateRoutesProps) => {
  const context = useAuthenticatedUserContext();

  if (context.state.accessToken == null) {
    return <Navigate to="/login" replace />;
  }

  return <div>{props.children}</div>;
};
