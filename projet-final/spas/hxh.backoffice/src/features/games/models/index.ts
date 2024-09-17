export type GameStatus = "Ready" | "Ongoing" | "Success" | "Fail";

export interface Game {
  id: number;
  player: Player;
  status: GameStatus;
}

export interface Player {
  name: string;
}
