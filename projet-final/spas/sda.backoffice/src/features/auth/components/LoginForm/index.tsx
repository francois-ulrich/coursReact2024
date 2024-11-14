import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginFormData } from "../../custom-types";
import { useAuthenticationContext } from "../../store/authenticationContext";

export const LoginForm = () => {
  const authenticationContext = useAuthenticationContext();

  const [formData, setFormData] = useState<LoginFormData>({
    login: "fulrich3@gmail.com",
    password: "123456@aZ",
  });

  // Fonction de gestion des changements de chaque champ
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value, // Mettre à jour la valeur de l'input correspondant
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (authenticationContext.logIn === null) return;

    authenticationContext.logIn(formData);
  };

  return (
    <>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.login}
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
      </div>
    </>
  );
};
