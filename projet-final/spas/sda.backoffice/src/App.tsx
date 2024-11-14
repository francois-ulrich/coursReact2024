import "./App.css";
import { AuthenticationContextProvider } from "./features/auth/store/AuthenticationContextProvider";
import { AppView } from "./shared/components/AppView";
import { StorageContextProvider } from "./shared/hooks/StorageContextProvider";

function App() {
  return (
    <StorageContextProvider>
      <AuthenticationContextProvider>
        <AppView></AppView>
      </AuthenticationContextProvider>
    </StorageContextProvider>
  );
}

export default App;
