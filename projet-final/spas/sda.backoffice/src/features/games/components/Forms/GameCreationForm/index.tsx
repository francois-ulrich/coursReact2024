import { GameEditRequestData, GameFormData } from "../../../models";

import business from "../../../services/games.application";
import { useGamesContext } from "../../../store/gamesContext";
import { useToastContext } from "../../../../toast/store/toastContext";
import { GameForm } from "../GameForm";

interface Props {
  onHide: () => void;
}

export const GameCreationForm = (props: Props) => {
  const gamesContext = useGamesContext();
  const toastContext = useToastContext();

  const handleFormSubmit = async (formData: GameFormData) => {
    const game: GameEditRequestData = {
      ...formData,
      dateEnd: formData.dateEnd === "" ? null : formData.dateEnd,
    };

    try {
      const res = await business.create(game);

      if (!gamesContext.createGame) return;

      gamesContext.createGame(res);

      if (!toastContext.show) return;

      toastContext.show({
        severity: "success",
        summary: "Success",
        detail: "La partie a été créée",
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
      <GameForm onHide={props.onHide} handleFormSubmit={handleFormSubmit} />
    </>
  );
};
