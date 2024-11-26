import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";
import { Game, GameFormData } from "../../models";
import {
  dateToInputDateValue,
  formatStringToDateFormat,
} from "../../../../util";

interface Props {
  game: Game | null;
  onHide: () => void;
  handleFormSubmit: (formData: GameFormData) => void;
}

export const GameForm = (props: Props) => {
  const [formData, setFormData] = useState<GameFormData>({
    name: props.game ? props.game.name : "",
    characterName: props.game ? props.game.characterName : "",
    success: props.game ? props.game.success : false,
    dateStart: props.game
      ? formatStringToDateFormat(props.game.dateStart, "yyyy-MM-dd")
      : "",
    dateEnd: props.game
      ? props.game.success && props.game.dateEnd
        ? formatStringToDateFormat(props.game.dateEnd, "yyyy-MM-dd")
        : ""
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
    props.handleFormSubmit(formData);
  };

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
