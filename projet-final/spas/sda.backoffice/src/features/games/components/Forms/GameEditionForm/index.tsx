import { Game, GameEditRequestData, GameFormData } from "../../../models";

import business from "../../../services/games.application";
import { useGamesContext } from "../../../store/gamesContext";
import { useToastContext } from "../../../../toast/store/toastContext";
import { GameForm } from "../GameForm";

interface Props {
  game: Game;
  onHide: () => void;
}

export const GameEditionForm = (props: Props) => {
  const gamesContext = useGamesContext();
  const toastContext = useToastContext();

  const handleFormSubmit = async (formData: GameFormData) => {
    const game: GameEditRequestData = {
      ...formData,
      dateEnd: formData.dateEnd === "" ? null : formData.dateEnd,
    };

    try {
      const res = await business.update(props.game.id, game);

      if (!gamesContext.updateGame) return;

      gamesContext.updateGame(res);

      if (!toastContext.show) return;

      toastContext.show({
        severity: "success",
        summary: "Success",
        detail: "La partie a été mise à jour",
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
      <GameForm
        game={props.game}
        onHide={props.onHide}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};
