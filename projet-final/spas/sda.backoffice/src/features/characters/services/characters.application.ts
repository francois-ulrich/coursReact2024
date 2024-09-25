import { GetAllCharacters } from "../custom-types";
import { Character } from "../models";
import { getAllCharactersFromApi } from "./characters.infrastructure";

/**
 * Gets all characters
 * @param api Api forgetting raw list of characters
 */
async function getAllCharacters(api: GetAllCharacters): Promise<Character[]> {
  const result = await api();
  result.filter((item) => item.name !== "");
  return result;
}

function factoryGetAllCharactersBusiness(): Promise<Character[]> {
  return getAllCharacters(getAllCharactersFromApi);
}

const business = {
  getAll: factoryGetAllCharactersBusiness,
};

export default business;
