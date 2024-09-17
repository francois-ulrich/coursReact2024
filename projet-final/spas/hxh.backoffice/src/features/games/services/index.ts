import { Game } from "../models";

export const getGameList = (): Game[] => {
  return [
    { id: 1, player: { name: "Gon" }, gameStatus: "Fail" },
    { id: 2, player: { name: "Kurapika" }, gameStatus: "Ongoing" },
    { id: 3, player: { name: "Leolio" }, gameStatus: "Ready" },
    { id: 4, player: { name: "Killua" }, gameStatus: "Fail" },
    { id: 5, player: { name: "Hisoka" }, gameStatus: "Ongoing" },
  ];
};
