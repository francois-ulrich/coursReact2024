import { Route, Routes } from "react-router-dom";
import { CharactersListView } from "./features/characters/views/CharactersListView";
import { GamesListView } from "./features/games/views/GamesListView";
import { NoMatchView } from "./shared/views/NoMatchView";
import { HomepageView } from "./shared/views/HomepageView";

/**
 * View to display if the url doesn't match any view in the router
 */

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomepageView></HomepageView>}></Route>
    <Route
      path="/characters"
      element={<CharactersListView></CharactersListView>}
    ></Route>
    <Route path="/games" element={<GamesListView></GamesListView>}></Route>
    <Route path="*" element={<NoMatchView />} />
  </Routes>
);
