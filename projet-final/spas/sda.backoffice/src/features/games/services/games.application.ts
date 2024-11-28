import { GetAllGames } from "../custom-types";
import { Game } from "../models";
import {
  createGame,
  deleteGame,
  getAllGamesFromApi,
  updateGame,
} from "./games.infrastructure";

/**
 * Gets all gams
 * @param api Api for getting raw list of games
 */
async function getAllGames(api: GetAllGames): Promise<Game[]> {
  const result = await api();
  return result;
}

function factoryGetAllGamesBusiness(): Promise<Game[]> {
  return getAllGames(getAllGamesFromApi);
}

const business = {
  getAll: factoryGetAllGamesBusiness,
  create: createGame,
  update: updateGame,
  delete: deleteGame,
};

export default business;
