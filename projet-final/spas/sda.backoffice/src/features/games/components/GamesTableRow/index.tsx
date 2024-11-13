import { Game } from "../../models";

export type GamesTableRowProp = {
  game: Game;
};

/**
 * One row inside a Game Table
 */
export const GamesTableRow = (props: GamesTableRowProp) => {
  const { id, name, characterName, success, dateStart, dateEnd } = props.game;

  const component = (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{characterName}</td>
      <td>{success ? "Oui" : "Non"}</td>
      <td>{dateStart}</td>
      <td>{dateEnd}</td>
    </tr>
  );

  return component;
};
