import { Dialog } from "primereact/dialog";
import "primeicons/primeicons.css";
import { GameCreationForm } from "../../Forms/GameCreationForm";

interface Props {
  visible: boolean;
  onHide: () => void;
}

export const GameCreationDialog = (props: Props) => {
  return (
    <>
      <Dialog
        header="Création"
        style={{ width: "50vw" }}
        visible={props.visible}
        onHide={props.onHide}
      >
        <GameCreationForm onHide={props.onHide}></GameCreationForm>
      </Dialog>
    </>
  );
};
