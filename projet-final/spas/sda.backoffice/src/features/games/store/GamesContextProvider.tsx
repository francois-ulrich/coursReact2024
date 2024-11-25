import { PropsWithChildren, useEffect, useState } from "react";
import {
  GamesContext,
  GamesContextState,
  MutableGamesContext,
} from "./gamesContext";
import business from "../services/games.application";

export const GamesContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<GamesContextState>({
    games: [],
  });

  const fetchGames = async () => {
    business.getAll().then((res) => {
      setState((prevState) => ({
        ...prevState,
        games: res,
      }));
    });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const context: MutableGamesContext = {
    state,
    setState,
  };

  return (
    <GamesContext.Provider value={context}>
      {props.children}
    </GamesContext.Provider>
  );
};
