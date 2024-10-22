import "./App.css";
import { MainRoutes } from "./AppRoutes";
import { AuthenticationContextProvider } from "./features/auth/store/AuthenticationContextProvider";
import { StorageContextProvider } from "./shared/hooks/StorageContextProvider";
import MainNavBar from "./shared/layout/MainNavBar";

function App() {
  return (
    <StorageContextProvider>
      <AuthenticationContextProvider>
        <MainNavBar />

        <div className="uiBody">
          <MainRoutes />
        </div>

        {/* <PrivateRoutes value={0}>
        <p>test 1</p>
        <p>test 2</p>
        <button>Click me</button>
      </PrivateRoutes> */}
      </AuthenticationContextProvider>
    </StorageContextProvider>
  );
}

export default App;
