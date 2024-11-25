import { createContext, useContext } from "react";
import { Game } from "../models";

export interface GamesContextState {
  games: Game[];
}

export interface MutableGamesContext {
  state: GamesContextState;
  setState: React.Dispatch<React.SetStateAction<GamesContextState>> | null;
}

const initialContextState: MutableGamesContext = {
  state: {
    games: [],
  },
  setState: null,
};

export const GamesContext =
  createContext<MutableGamesContext>(initialContextState);

export const useGamesContext = () => useContext(GamesContext);
