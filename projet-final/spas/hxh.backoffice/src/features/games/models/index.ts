export type GameStatus = "Ready" | "Ongoing" | "Success" | "Fail";

export interface Game {
  id: number;
  player: Player;
  gameStatus: GameStatus;
}

export interface Player {
  name: string;
}
