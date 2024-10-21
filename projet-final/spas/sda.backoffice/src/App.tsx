import "./App.css";
import { MainRoutes } from "./AppRoutes";
import { AuthenticatedUserContextProvider } from "./features/auth/context/AuthenticatedUserContextProvider";
import { StorageContextProvider } from "./shared/hooks/StorageContextProvider";
import MainNavBar from "./shared/layout/MainNavBar";

function App() {
  return (
    <StorageContextProvider>
      <AuthenticatedUserContextProvider>
        <MainNavBar />

        <div className="uiBody">
          <MainRoutes />
        </div>

        {/* <PrivateRoutes value={0}>
        <p>test 1</p>
        <p>test 2</p>
        <button>Click me</button>
      </PrivateRoutes> */}
      </AuthenticatedUserContextProvider>
    </StorageContextProvider>
  );
}

export default App;
