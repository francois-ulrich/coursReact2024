import { Game } from "../../models";

export type GameTableRowProp = {
  game: Game;
};

export const GameTableRow = (props: GameTableRowProp) => {
  const component = (
    <tr>
      <td>{props.game.id}</td>
      <td>{props.game.player.name}</td>
      <td>{props.game.gameStatus}</td>
    </tr>
  );

  return component;
};
