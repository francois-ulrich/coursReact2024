import { Game } from "../models";

const url = "https://localhost:7207/api/game";

export interface GameApiReturnType {
  id: number;
  dateStart: string;
  dateEnd?: string;
  characterName: string;
  success: boolean;
}

export type ApiReturnType = GameApiReturnType[];

async function getAllGamesFromApiRaw(): Promise<ApiReturnType> {
  const response = await fetch(url);
  const result = (await response.json()) as ApiReturnType;
  return result;
}

async function getAllCharactersFromApiBase(
  fetchRaw: () => Promise<ApiReturnType>
): Promise<Game[]> {
  const rawRes = await fetchRaw();
  return rawRes.map((element) => ({
    id: element.id,
    player: { name: element.characterName },
    isWon: element.success,
  }));
}

export async function getAllGamesFromApi(): Promise<Game[]> {
  return getAllCharactersFromApiBase(getAllGamesFromApiRaw);
}
