import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Game, GameFormData } from "../../../models";
import { formatStringToDateFormat } from "../../../../../util";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface Props {
  game?: Game;
  onHide: () => void;
  handleFormSubmit: (formData: GameFormData) => void;
}

type Inputs = {
  name: string;
  characterName: string;
  success: boolean;
  dateStart: string;
  dateEnd: string;
};

export const GameForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
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
    },
  });

  const isDateEndRequired = watch("success");

  useEffect(() => {
    if (!isDateEndRequired) {
      setValue("dateEnd", "");
    }
  }, [isDateEndRequired]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    props.handleFormSubmit(formData);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nom du jeu</Form.Label>
          <Form.Control
            {...register("name", {
              required: "Veuillez entrer le nom du jeu",
              minLength: 1,
            })}
            isInvalid={!!errors.name}
          />

          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="characterName">
          <Form.Label>Nom du joueur</Form.Label>
          <Form.Control
            {...register("characterName", {
              required: "Veuillez entrer le nom du joueur",
              minLength: 1,
            })}
            isInvalid={!!errors.characterName}
          />
          {errors.characterName && (
            <Form.Control.Feedback type="invalid">
              {errors.characterName.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="success">
          <Form.Label>Jeu fini ?</Form.Label>

          <Form.Check {...register("success")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dateStart">
          <Form.Label>Date de début</Form.Label>
          <Form.Control
            type="date"
            {...register("dateStart", {
              required: "Veuillez entrer la date de début",
              minLength: 1,
            })}
            isInvalid={!!errors.dateStart}
          />

          {errors.dateStart && (
            <Form.Control.Feedback type="invalid">
              {errors.dateStart.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="dateEnd">
          <Form.Label>Date de fin</Form.Label>
          <Form.Control
            type="date"
            disabled={!isDateEndRequired}
            {...register("dateEnd", {
              required: isDateEndRequired
                ? "Veuillez entrer la date de fin"
                : false,
              minLength: 1,
            })}
            isInvalid={!!errors.dateEnd}
          />

          {errors.dateEnd && (
            <Form.Control.Feedback type="invalid">
              {errors.dateEnd.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    </>
  );
};
