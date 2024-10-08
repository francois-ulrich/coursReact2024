import { GetAllGames } from "../custom-types";
import { Game } from "../models";
import { getAllGamesFromApi } from "./games.infrastructure";

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
};

export default business;
