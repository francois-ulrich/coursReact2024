export type GameStatus = "Ready" | "Ongoing" | "Success" | "Fail";

export interface Game {
  id: number;
  player: Player;
  isWon: boolean;
}

export interface Player {
  name: string;
}
