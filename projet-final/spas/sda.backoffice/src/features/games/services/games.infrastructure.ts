import axios from "axios";
import { Game } from "../models";

export interface GameApiReturnType {
  id: number;
  dateStart: string;
  dateEnd?: string;
  characterName: string;
  success: boolean;
}

export type ApiReturnType = GameApiReturnType[];

// Create the API client with credentials enabled
const apiClient = axios.create({
  baseURL: "https://localhost:7207",
  withCredentials: true, // Ensures cookies are sent with requests
});

async function getAllGamesFromApiRaw(): Promise<ApiReturnType> {
  // const response = await fetch(url, {
  //   credentials: "include",
  // });
  // const result = (await response.json()) as ApiReturnType;
  // return result;

  const response = await apiClient.get<ApiReturnType>("/api/Game");
  console.log(response);
  return response.data;

  // const result = (await response.json()) as ApiReturnType;
  // return result;
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
