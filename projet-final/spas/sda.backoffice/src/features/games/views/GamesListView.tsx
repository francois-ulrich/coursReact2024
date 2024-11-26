import GamesList from "../components/GamesList";
import { GamesContextProvider } from "../store/GamesContextProvider";

export const GamesListView = () => {
  return (
    <>
      <GamesContextProvider>
        <GamesList />
      </GamesContextProvider>
    </>
  );
};
