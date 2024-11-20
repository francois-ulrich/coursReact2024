import Form from "react-bootstrap/Form";
import { Game, GameEditRequestData, GameFormData } from "../../models";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  dateToInputDateValue,
  formatStringToDateFormat,
} from "../../../../util";
import business from "../../services/games.application";

interface Props {
  game: Game;
}

export const GameEditForm = (props: Props) => {
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

  const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const game: GameEditRequestData = {
      ...formData,
      dateEnd: formData.dateEnd === "" ? null : formData.dateEnd,
    };

    business.update(props.game.id, game).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      dateEnd: formData.success ? dateToInputDateValue(new Date()) : "",
    });
  }, [formData.success]);

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nom du jeu</Form.Label>
          <Form.Control
            type="string"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nom du joueur</Form.Label>
          <Form.Control
            type="string"
            name="characterName"
            value={formData.characterName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Jeu fini ?</Form.Label>

          <Form.Check // prettier-ignore
            name="success"
            checked={formData.success}
            onChange={handleCheckBoxChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Date de début</Form.Label>
          <Form.Control
            type="date"
            name="dateStart"
            value={formData.dateStart}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
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
