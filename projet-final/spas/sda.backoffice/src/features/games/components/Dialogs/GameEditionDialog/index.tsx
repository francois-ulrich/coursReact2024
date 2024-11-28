import { Dialog } from "primereact/dialog";
import { GameEditionForm } from "../../Forms/GameEditionForm";
import { Game } from "../../../models";
import "primeicons/primeicons.css";

interface Props {
  game: Game | undefined;
  visible: boolean;
  onHide: () => void;
}

export const GameEditionDialog = (props: Props) => {
  if (!props.game) return <></>;

  return (
    <>
      <Dialog
        header="Édition"
        style={{ width: "50vw" }}
        visible={props.visible}
        onHide={props.onHide}
      >
        <GameEditionForm
          game={props.game}
          onHide={props.onHide}
        ></GameEditionForm>
      </Dialog>
    </>
  );
};
