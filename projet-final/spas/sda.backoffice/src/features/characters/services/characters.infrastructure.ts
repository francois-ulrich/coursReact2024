import axios from "axios";
import { Character } from "../models";

const url = "https://the-one-api.dev/v2/character?limit=30";
const apiToken = "hthfy8nI-pZho36BEywH";

export interface CharacterApiReturnType {
  _id: string;
  name: string;
  gender: string;
  race: string;
}

export interface ApiReturnType {
  docs: CharacterApiReturnType[];
}

export function getRequestHeader() {
  return {
    Authorization: `Bearer ${apiToken}`,
  };
}

/**
 *
 * @returns Get a list of characters from the api
 */

async function getAllCharactersFromApiRaw(): Promise<ApiReturnType> {
  // const headers = getRequestHeader();
  // const response = await fetch(url, { headers });
  // const result = (await response.json()) as ApiReturnType;

  const response = await axios.get<ApiReturnType>(url, {
    headers: getRequestHeader(),
  });
  return response.data;
}

async function getAllCharactersFromApiBase(
  fetchRaw: () => Promise<ApiReturnType>
): Promise<Character[]> {
  const rawRes = await fetchRaw();
  return rawRes.docs.map((doc) => ({
    id: doc._id,
    name: doc.name,
  }));
}

export async function getAllCharactersFromApi(): Promise<Character[]> {
  return getAllCharactersFromApiBase(getAllCharactersFromApiRaw);
}
