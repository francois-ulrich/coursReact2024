import axiosClient from "../../../axiosClient";
import { Game } from "../models";

export interface GameApiReturnType {
  id: number;
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd?: string;
}

async function getAllGamesFromApiRaw(): Promise<GameApiReturnType[]> {
  const response = await axiosClient.get<GameApiReturnType[]>("/api/Game");
  return response.data;
}

async function getAllCharactersFromApiBase(
  fetchRaw: () => Promise<GameApiReturnType[]>
): Promise<Game[]> {
  const rawRes = await fetchRaw();
  return rawRes;
}

export async function getAllGamesFromApi(): Promise<Game[]> {
  return getAllCharactersFromApiBase(getAllGamesFromApiRaw);
}
