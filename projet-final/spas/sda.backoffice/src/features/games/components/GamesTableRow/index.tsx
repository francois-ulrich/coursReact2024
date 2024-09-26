export type GamesTableRowProp = {
  id: number;
  playerName: string;
  isWon: boolean;
  changeGameIsWonStatusCallback?: (id: number, newState: boolean) => void;
};

/**
 * One row inside a Game Table
 */
export const GamesTableRow = (props: GamesTableRowProp) => {
  const onStatusChangeClick = () => {
    if (props.changeGameIsWonStatusCallback === undefined) return;

    props.changeGameIsWonStatusCallback(props.id, !props.isWon);
  };

  const component = (
    <tr>
      <td>{props.id}</td>
      <td>{props.playerName}</td>
      <td>{props.isWon ? "Yes" : "No"}</td>
      <td>
        <button onClick={onStatusChangeClick}>Toggle status</button>
      </td>
    </tr>
  );

  return component;
};
