import { Dialog } from "primereact/dialog";
import { GameEditForm } from "../../GameEditForm";
import { Game } from "../../../models";
import "primeicons/primeicons.css";

interface Props {
  game: Game | undefined;
  visible: boolean;
  onHide: () => void;
}

export const GameEditDialog = (props: Props) => {
  if (!props.game) return <></>;

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
