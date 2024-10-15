import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import business from "../../services/auth.application";
import { FormLoginData } from "../../custom-types";
import { useAuthenticatedUserContext } from "../../context/authenticatedUserContext";

export const LoginForm = () => {
  const context = useAuthenticatedUserContext();

  const [formData, setFormData] = useState<FormLoginData>({
    username: "emilys",
    password: "emilyspass",
  });

  // Fonction de gestion des changements de chaque champ
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value, // Mettre à jour la valeur de l'input correspondant
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    business.login(formData).then((res) => {
      if (context.setState === null) return;

      context.setState(res);
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="string"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Se connecter
        </Button>
      </Form>
    </>
  );
};
