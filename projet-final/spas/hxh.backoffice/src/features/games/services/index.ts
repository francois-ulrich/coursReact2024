import { Game } from "../models";

export const getGameList = (): Game[] => {
  return [
    { id: 1, player: { name: "Gon" }, status: "Fail" },
    { id: 2, player: { name: "Kurapika" }, status: "Ongoing" },
    { id: 3, player: { name: "Leolio" }, status: "Ready" },
    { id: 4, player: { name: "Killua" }, status: "Fail" },
    { id: 5, player: { name: "Hisoka" }, status: "Ongoing" },
  ];
};
