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
export async function createGame(gameData: GameEditRequestData): Promise<Game> {
  const response = await axiosClient.post<Game>(`/api/Game`, {
    ...gameData,
  });

  return response.data;
}

// PUT
export async function updateGame(
  id: number,
  gameData: GameEditRequestData
): Promise<Game> {
  const response = await axiosClient.put<Game>(`/api/Game/${id}`, {
    ...gameData,
  });

  return response.data;
}

// DELETE
export async function deleteGame(id: number): Promise<Game> {
  const response = await axiosClient.delete<Game>(`/api/Game/${id}`);

  return response.data;
}
