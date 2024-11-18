import Form from "react-bootstrap/Form";
import { Game, GameFormData } from "../../models";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { formatStringToDateFormat } from "../../../../util";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  game: Game;
}

export const GameEditForm = (props: Props) => {
  const [formData, setFormData] = useState<GameFormData>({
    name: props.game.name,
    characterName: props.game.characterName,
    success: props.game.success,
    dateStart: formatStringToDateFormat(props.game.dateStart, "yyyy-MM-dd"),
    dateEnd: props.game.dateEnd
      ? formatStringToDateFormat(props.game.dateEnd, "yyyy-MM-dd")
      : "",
  });

  const [dates, setDates] = useState<Record<string, Date | null>>({
    startDate: new Date(props.game.dateStart),
    endDate: props.game.dateEnd ? new Date(props.game.dateEnd) : null,
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

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = event.target;
    // setDates((prevDates) => ({
    //   ...prevDates,
    //   [name]: value,
    // }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

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
            name="date"
            value={formData.dateStart}
            onChange={handleDateChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Date de fin</Form.Label>
          <Form.Control
            disabled={!formData.success}
            type="date"
            name="date"
            value={formData.dateEnd}
            onChange={handleDateChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    </>
  );
};
