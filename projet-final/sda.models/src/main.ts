import { Game } from "./game";
import { Player } from "./player";

const player: Player = {
  firstName: "François",
  birthDate: new Date(),
  role: {
    label: "Magicien",
    power: 1000,
  },
};

player.games = [];

const game: Game = {
  player: player,
  dateStart: new Date(),
  dateEnd: new Date(),
  state: "Ready",
  title: "Hunter Exam",
};

player.games.push(game);
