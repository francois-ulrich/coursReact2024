import { Route, Routes } from "react-router-dom";
import { CharactersListView } from "./features/characters/views/CharactersListView";
import { GamesListView } from "./features/games/views/GamesListView";
import { NoMatchView } from "./shared/views/NoMatchView";
import { HomepageView } from "./shared/views/HomepageView";
import { LoginView } from "./features/auth/views/LoginView";
import { AuthenticatedUserContextProvider } from "./features/auth/context/AuthenticatedUserContextProvider";
// import { PrivateRoutes } from "./shared/components/PrivateRoutes";
import { StorageContextProvider } from "./shared/hooks/StorageContextProvider";

/**
 * View to display if the url doesn't match any view in the router
 */

export const MainRoutes = () => (
  <StorageContextProvider>
    <AuthenticatedUserContextProvider>
      <Routes>
        {/* <Route path="/" element={<PrivateRoutes />}> */}
        <Route path="/">
          <Route
            path="/characters"
            element={<CharactersListView></CharactersListView>}
          ></Route>
          <Route
            path="/games"
            element={<GamesListView></GamesListView>}
          ></Route>
        </Route>
        <Route path="/login" element={<LoginView></LoginView>}></Route>
        <Route path="/" element={<HomepageView></HomepageView>}></Route>
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </AuthenticatedUserContextProvider>
  </StorageContextProvider>
);
