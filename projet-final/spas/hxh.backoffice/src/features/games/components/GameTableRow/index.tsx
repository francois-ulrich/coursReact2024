import { GameStatus } from "../../models";

export type GameTableRowProp = {
  id: number;
  playerName: string;
  status: GameStatus;
};

/**
 * One row inside a Game Table
 */
export const GameTableRow = (props: GameTableRowProp) => {
  const component = (
    <tr>
      <td>{props.id}</td>
      <td>{props.playerName}</td>
      <td>{props.status}</td>
    </tr>
  );

  return component;
};
