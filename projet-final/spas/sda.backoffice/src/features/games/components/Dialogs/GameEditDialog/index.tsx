import { Dialog } from "primereact/dialog";
import { GameEditForm } from "../../GameEditForm";
import { Game } from "../../../models";
import "primeicons/primeicons.css";

interface Props {
  game: Game;
  visible: boolean;
  onHide: () => void;
}

export const GameEditDialog = (props: Props) => {
  return (
    <>
      <Dialog
        header="Édition"
        style={{ width: "50vw" }}
        visible={props.visible}
        onHide={props.onHide}
      >
        <GameEditForm game={props.game}></GameEditForm>
      </Dialog>
    </>
  );
};
