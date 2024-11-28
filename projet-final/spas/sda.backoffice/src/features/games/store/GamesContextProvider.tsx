import { PropsWithChildren, useEffect, useState } from "react";
import {
  GamesContext,
  GamesContextState,
  MutableGamesContext,
} from "./gamesContext";
import business from "../services/games.application";
import { Game } from "../models";

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

  const createGame = (createdGame: Game) => {
    setState({
      ...state,
      games: [...state.games, createdGame],
    });
  };

  const updateGame = (updatedGame: Game) => {
    setState((prevState) => ({
      ...prevState,
      games: prevState.games.map((game) =>
        game.id === updatedGame.id ? updatedGame : game
      ),
    }));
  };

  const deleteGame = (deletedGame: Game) => {
    setState((prevState) => ({
      ...prevState,
      games: prevState.games.filter((game) => game.id !== deletedGame.id),
    }));
  };

  const context: MutableGamesContext = {
    state,
    setState,
    createGame,
    updateGame,
    deleteGame,
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <GamesContext.Provider value={context}>
      {props.children}
    </GamesContext.Provider>
  );
};
