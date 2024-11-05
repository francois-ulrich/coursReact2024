import axiosClient from "../../../axiosClient";
import { Game } from "../models";

export interface GameApiReturnType {
  id: number;
  dateStart: string;
  dateEnd?: string;
  characterName: string;
  success: boolean;
}

export type ApiReturnType = GameApiReturnType[];

async function getAllGamesFromApiRaw(): Promise<ApiReturnType> {
  const response = await axiosClient.get<ApiReturnType>("/api/Game");
  return response.data;
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
