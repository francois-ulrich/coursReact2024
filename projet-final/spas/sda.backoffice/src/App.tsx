import "./App.css";
import { MainRoutes } from "./AppRoutes";
import { UseMyContext } from "./learnings/useContext/UseMyContext";
import MainNavBar from "./shared/layout/MainNavBar";

function App() {
  return (
    <>
      <MainNavBar />
      <UseMyContext></UseMyContext>
      <MainRoutes />
    </>
  );
}

export default App;
