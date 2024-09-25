import { Route, Routes } from "react-router-dom";
import { CharactersListView } from "./features/characters/views/CharactersListView";

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/characters"
      element={<CharactersListView></CharactersListView>}
    ></Route>
  </Routes>
);
