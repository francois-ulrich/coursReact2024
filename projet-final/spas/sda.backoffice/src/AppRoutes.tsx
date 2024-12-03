import { Route, Routes } from "react-router-dom";
import { CharactersListView } from "./features/characters/views/CharactersListView";
import { NoMatchView } from "./shared/views/NoMatchView";
import { HomepageView } from "./shared/views/HomepageView";
import { LoginView } from "./features/auth/views/LoginView";
import { PrivateRoute } from "./shared/components/PrivateRoute";
import { GameCreationView } from "./features/games/views/GameCreationView";
import { GamesView } from "./features/games/views/GamesView";
import { MemoView } from "./learnings/memo/MemoView";
import { UseCallbackView } from "./learnings/useCallback/UseCallbackView";

/**
 * View to display if the url doesn't match any view in the router
 */

export const MainRoutes = () => (
  <Routes>
    <Route
      path="/characters"
      element={
        <PrivateRoute>
          <CharactersListView></CharactersListView>
        </PrivateRoute>
      }
    ></Route>

    <Route
      path="/games/create"
      element={<GameCreationView></GameCreationView>}
    />
    <Route
      path="/games"
      element={
        <PrivateRoute>
          <GamesView></GamesView>
        </PrivateRoute>
      }
    ></Route>

    <Route path="/memo" element={<MemoView></MemoView>}></Route>

    <Route
      path="/usecallback"
      element={<UseCallbackView></UseCallbackView>}
    ></Route>

    <Route path="/login" element={<LoginView></LoginView>} />
    <Route path="/" element={<HomepageView />} />
    <Route path="*" element={<NoMatchView />} />
  </Routes>
);
