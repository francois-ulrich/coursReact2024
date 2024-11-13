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
  const rowsList = props.games.map((game: Game) => (
    <GamesTableRow key={game.id} game={game} />
  ));

  const component = (
    <>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nom du jeu</td>
            <td>Nom du joueur</td>
            <td>Jeu fini ?</td>
            <td>Date de début</td>
            <td>Date de fin</td>
          </tr>
        </thead>
        <tbody>{rowsList}</tbody>
      </Table>
    </>
  );

  return component;
};

export default GamesTable;
