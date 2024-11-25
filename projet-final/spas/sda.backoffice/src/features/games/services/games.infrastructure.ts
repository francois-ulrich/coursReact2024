import { AxiosResponse } from "axios";
import axiosClient from "../../../axiosClient";
import { Game, GameEditRequestData } from "../models";

export interface GameApiReturnType {
  id: number;
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd: string | null;
}
// GET
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

// POST

// PUT
export async function updateGame(
  id: number,
  gameData: GameEditRequestData
): Promise<AxiosResponse<Game>> {
  const response = await axiosClient.put<Promise<AxiosResponse<Game>>>(
    `/api/Game/${id}`,
    {
      ...gameData,
    }
  );
  return response.data;
}

// DELETE
