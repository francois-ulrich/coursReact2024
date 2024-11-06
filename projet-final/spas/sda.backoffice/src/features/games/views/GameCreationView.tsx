import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  gameName: string;
};

export const GameCreationView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      gameName: "Super Mario World",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <h1>Création d'un nouveau jeu</h1>
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom du jeu à créer</Form.Label>
            <Form.Control
              {...register("gameName", {
                required: true,
                minLength: 1,
              })}
            />
          </Form.Group>

          {errors.gameName && <p>Ce champ est requis</p>}

          <Button variant="primary" type="submit" disabled={!isValid}>
            Envoyer
          </Button>
        </Form>
      </div>
    </>
  );
};
