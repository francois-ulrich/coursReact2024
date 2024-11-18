export type GameStatus = "Ready" | "Ongoing" | "Success" | "Fail";

export interface Game {
  id: number;
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd?: string;
}

export interface GameFormData {
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd?: string;
}

export interface Player {
  name: string;
}
