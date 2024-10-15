import { Route, Routes } from "react-router-dom";
import { CharactersListView } from "./features/characters/views/CharactersListView";
import { GamesListView } from "./features/games/views/GamesListView";
import { NoMatchView } from "./shared/views/NoMatchView";
import { HomepageView } from "./shared/views/HomepageView";
import { LoginView } from "./features/auth/views/LoginView";
import { AuthenticatedUserContextProvider } from "./features/auth/context/AuthenticatedUserContextProvider";

/**
 * View to display if the url doesn't match any view in the router
 */

export const MainRoutes = () => (
  <AuthenticatedUserContextProvider>
    <Routes>
      <Route path="/" element={<HomepageView></HomepageView>}></Route>
      <Route
        path="/characters"
        element={<CharactersListView></CharactersListView>}
      ></Route>
      <Route path="/games" element={<GamesListView></GamesListView>}></Route>
      <Route path="/login" element={<LoginView></LoginView>}></Route>
      <Route path="*" element={<NoMatchView />} />
    </Routes>
  </AuthenticatedUserContextProvider>
);
