/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Table } from "react-bootstrap";
import { GameTableRow } from "../GameTableRow";
import { Game } from "../../models";

export type TableGameProp = {
  games: Game[];
};

const GameTable = (props: TableGameProp) => {
  const rowsList = props.games.map((game) => (
    <GameTableRow key={game.id} game={game} />
  ));

  const component = (
    <>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Player</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>{rowsList}</tbody>
      </Table>
    </>
  );

  return component;
};

export default GameTable;
