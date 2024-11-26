import GamesList from "../components/GamesList";
import { GamesContextProvider } from "../store/GamesContextProvider";

export const GamesView = () => {
  return (
    <>
      <GamesContextProvider>
        <GamesList />
      </GamesContextProvider>
    </>
  );
};
