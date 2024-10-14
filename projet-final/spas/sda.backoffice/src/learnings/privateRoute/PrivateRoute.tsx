import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type PrivateRouteProps<P = unknown> = P & {
  children: ReactNode;
  value: number;
};

export const PrivateRoute = (props: PrivateRouteProps) => {
  if (props.value === 0)
    return <>{props.value === 0 && <Navigate to="/login" replace />}</>;

  return (
    <>
      <h2>My children :</h2>
      <div>{props.children}</div>
    </>
  );
};
