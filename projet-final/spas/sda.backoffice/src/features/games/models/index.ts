export type GameStatus = "Ready" | "Ongoing" | "Success" | "Fail";

export interface Game {
  id: number;
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd: string | null;
}

export interface GameFormData {
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd: string;
}

export interface GameEditRequestData {
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd: string | null;
}

export interface Player {
  name: string;
}
