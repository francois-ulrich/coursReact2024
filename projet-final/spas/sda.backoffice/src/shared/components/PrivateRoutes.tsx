import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticatedUserContext } from "../../features/auth/context/authenticatedUserContext";

type PrivateRoutesProps<P = unknown> = P & {
  children: ReactNode;
  value: number;
};

export const PrivateRoutes = (props: PrivateRoutesProps) => {
  const context = useAuthenticatedUserContext();

  if (context.state.accessToken == "")
    return <>{props.value === 0 && <Navigate to="/login" replace />}</>;

  return <div>{props.children}</div>;
};
