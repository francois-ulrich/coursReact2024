import "./App.css";
import { MainRoutes } from "./AppRoutes";
import MainNavBar from "./shared/layout/MainNavBar";

function App() {
  return (
    <>
      <MainNavBar />

      <div className="uiBody">
        <MainRoutes />
      </div>

      {/* <PrivateRoutes value={0}>
        <p>test 1</p>
        <p>test 2</p>
        <button>Click me</button>
      </PrivateRoutes> */}
    </>
  );
}

export default App;
