import { Game } from "../models";

export const getGameList = (): Game[] => {
  return [
    { id: 1, player: { name: "Gon" }, isWon: false },
    { id: 2, player: { name: "Kurapika" }, isWon: false },
    { id: 3, player: { name: "Leolio" }, isWon: false },
    { id: 4, player: { name: "Killua" }, isWon: false },
    { id: 5, player: { name: "Hisoka" }, isWon: false },
  ];
};
