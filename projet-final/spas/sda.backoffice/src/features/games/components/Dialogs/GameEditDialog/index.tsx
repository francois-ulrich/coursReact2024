import { Dialog } from "primereact/dialog";
import { GameEditForm } from "../../GameEditForm";
import { Game } from "../../../models";

interface Props {
  game: Game | null;
  visible: boolean;
  onHide: () => void;
}

export const GameEditDialog = (props: Props) => {
  return (
    <>
      <Dialog header="Édition" style={{ width: "50vw" }} onHide={props.onHide}>
        {JSON.stringify(props)}

        <GameEditForm></GameEditForm>
      </Dialog>
    </>
  );
};
