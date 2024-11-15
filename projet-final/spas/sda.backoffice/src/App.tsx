import { PrimeReactProvider } from "primereact/api";
import "./App.css";
import { AuthenticationContextProvider } from "./features/auth/store/AuthenticationContextProvider";
import { AppView } from "./shared/components/AppView";
import { StorageContextProvider } from "./shared/hooks/StorageContextProvider";

function App() {
  return (
    <StorageContextProvider>
      <AuthenticationContextProvider>
        <PrimeReactProvider>
          <AppView></AppView>
        </PrimeReactProvider>
      </AuthenticationContextProvider>
    </StorageContextProvider>
  );
}

export default App;
