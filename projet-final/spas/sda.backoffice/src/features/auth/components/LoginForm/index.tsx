import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import business from "../../services/auth.application";
import { FormLoginData } from "../../custom-types";
import { useAuthenticationContext } from "../../store/authenticationContext";
import { useStorageContext } from "../../../../shared/hooks/storageContext";

export const LoginForm = () => {
  const authenticationContext = useAuthenticationContext();
  const storageContext = useStorageContext();

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

    if (authenticationContext.logIn === null) return;

    const { username, password } = formData;

    authenticationContext.logIn(username, password);
  };

  const handleLogout = () => {
    if (authenticationContext.logOut === null) return;

    authenticationContext.logOut();
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
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

        <Button variant="danger" type="submit" onClick={handleLogout}>
          Déconnexion
        </Button>
      </div>
      <div>
        <p>Storage data :</p>
        <p>{JSON.stringify(storageContext.state)}</p>
        <p>Authentication data :</p>
        <p>{JSON.stringify(authenticationContext.state)}</p>
      </div>
    </>
  );
};
