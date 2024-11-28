import { Dialog } from "primereact/dialog";
import { Game } from "../../../models";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import business from "../../../services/games.application";
import { useGamesContext } from "../../../store/gamesContext";
import { useToastContext } from "../../../../toast/store/toastContext";

interface Props {
  game: Game;
  visible: boolean;
  onHide: () => void;
}

export const GameDeletionDialog = (props: Props) => {
  const gamesContext = useGamesContext();
  const toastContext = useToastContext();

  const handleConfirmDeletion = async () => {
    try {
      await business.delete(props.game.id);

      if (!gamesContext.deleteGame) return;

      gamesContext.deleteGame(props.game);

      if (!toastContext.show) return;

      toastContext.show({
        severity: "success",
        summary: "Success",
        detail: `La partie "${props.game.name}" a été supprimée`,
        life: 3000,
      });

      props.onHide();
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <>
      <Dialog
        header="Suppression"
        style={{ width: "50vw" }}
        visible={props.visible}
        onHide={props.onHide}
      >
        <p>Supprimer la partie de "{props.game.name}" ?</p>

        <Button
          label="Non"
          icon="pi pi-times"
          onClick={() => props.onHide()}
          className="p-button-text"
        />
        <Button
          label="Oui"
          icon="pi pi-check"
          onClick={() => handleConfirmDeletion()}
          className="p-button-text"
        />
      </Dialog>
    </>
  );
};
