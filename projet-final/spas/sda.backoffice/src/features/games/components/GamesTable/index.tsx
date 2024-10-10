/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Table } from "react-bootstrap";
import { GamesTableRow } from "../GamesTableRow";
import { Game } from "../../models";

export type TableGameProp = {
  games: Game[];
  changeGameIsWonStatusCallback?: (
    gameId: number,
    newIsWonState: boolean
  ) => void;
};

const GamesTable = (props: TableGameProp) => {
  const changeGameIsWonStatusCallback = (
    gameId: number,
    newIsWonState: boolean
  ): void => {
    if (props.changeGameIsWonStatusCallback === undefined) return;
    props.changeGameIsWonStatusCallback(gameId, newIsWonState);
  };

  const rowsList = props.games.map((game: Game) => (
    <GamesTableRow
      key={game.id}
      id={game.id}
      playerName={game.player.name}
      isWon={game.isWon}
      changeGameIsWonStatusCallback={changeGameIsWonStatusCallback}
    />
  ));

  const component = (
    <>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Player</td>
            <td>Is Won</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>{rowsList}</tbody>
      </Table>
    </>
  );

  return component;
};

export default GamesTable;