import { Game } from "../../models";
import { format } from "date-fns";

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
      <td>{format(new Date(dateStart), "dd/MM/yyyy kk:mm")}</td>
      <td>{dateEnd ? format(new Date(dateEnd), "dd/MM/yyyy kk:mm") : "-"}</td>
    </tr>
  );

  return component;
};
