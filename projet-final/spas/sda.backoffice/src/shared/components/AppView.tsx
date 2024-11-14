import { MainRoutes } from "../../AppRoutes";
import { useAuthenticationContext } from "../../features/auth/store/authenticationContext";
import MainNavBar from "../layout/MainNavBar";

export const AppView = () => {
  const authContext = useAuthenticationContext();

  return (
    <>
      {authContext.state.autoAuthIsDone ? (
        <>
          <MainNavBar />
          <div className="uiBody">
            <MainRoutes />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
