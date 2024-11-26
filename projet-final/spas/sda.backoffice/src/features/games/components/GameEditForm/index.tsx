import Form from "react-bootstrap/Form";
import { Game, GameEditRequestData, GameFormData } from "../../models";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  dateToInputDateValue,
  formatStringToDateFormat,
} from "../../../../util";
import business from "../../services/games.application";
import { useGamesContext } from "../../store/gamesContext";
import { useToastContext } from "../../../toast/store/toastContext";

interface Props {
  game: Game;
  onHide: () => void;
}

export const GameEditForm = (props: Props) => {
  const gamesContext = useGamesContext();
  const toastContext = useToastContext();

  const [formData, setFormData] = useState<GameFormData>({
    name: props.game.name,
    characterName: props.game.characterName,
    success: props.game.success,
    dateStart: formatStringToDateFormat(props.game.dateStart, "yyyy-MM-dd"),
    dateEnd:
      props.game.success && props.game.dateEnd
        ? formatStringToDateFormat(props.game.dateEnd, "yyyy-MM-dd")
        : "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSuccessCheckBoxChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setFormData({
      ...formData,
      [name]: checked,
      dateEnd: checked ? dateToInputDateValue(new Date()) : "",
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  useEffect(() => {
    if (formData.success === true) return;

    setFormData({
      ...formData,
      dateEnd:
        formData.dateEnd === null ? dateToInputDateValue(new Date()) : "",
    });
  }, [formData.success]);

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nom du jeu</Form.Label>
          <Form.Control
            type="string"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nom du joueur</Form.Label>
          <Form.Control
            type="string"
            name="characterName"
            value={formData.characterName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jeu fini ?</Form.Label>

          <Form.Check
            name="success"
            checked={formData.success}
            onChange={handleSuccessCheckBoxChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date de début</Form.Label>
          <Form.Control
            type="date"
            name="dateStart"
            value={formData.dateStart}
            onChange={handleInputChange}
            // required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date de fin</Form.Label>
          <Form.Control
            disabled={!formData.success}
            type="date"
            name="dateEnd"
            value={formData.dateEnd}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    </>
  );
};
