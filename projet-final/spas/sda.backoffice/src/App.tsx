import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import { AuthenticationContextProvider } from "./features/auth/store/AuthenticationContextProvider";
import { AppView } from "./shared/components/AppView";
import { StorageContextProvider } from "./shared/store/StorageContextProvider";
import { ToastContextProvider } from "./features/toast/store/ToastContextProvider";

function App() {
  return (
    <StorageContextProvider>
      <AuthenticationContextProvider>
        <PrimeReactProvider>
          <ToastContextProvider>
            <AppView></AppView>
          </ToastContextProvider>
        </PrimeReactProvider>
      </AuthenticationContextProvider>
    </StorageContextProvider>
  );
}

export default App;
