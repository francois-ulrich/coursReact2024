import "./App.css";
import { MainRoutes } from "./AppRoutes";
import MainNavBar from "./shared/layout/MainNavBar";

function App() {
  return (
    <>
      <MainNavBar />
      <MainRoutes />
    </>
  );
}

export default App;
