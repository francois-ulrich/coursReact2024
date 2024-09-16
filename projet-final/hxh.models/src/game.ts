import { Player } from "./player";

export type GameState = "Ready" | "Ongoing" | "Success" | "Fail";

export type Games = Game[];

export interface Game {
  title: string;
  dateStart: Date;
  dateEnd?: Date;
  state: GameState;
  player: Player;
}
