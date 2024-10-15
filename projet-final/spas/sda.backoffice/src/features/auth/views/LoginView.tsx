import { LoginForm } from "../components/LoginForm";
import { useAuthenticatedUserContext } from "../context/authenticatedUserContext";

export const LoginView = () => {
  const context = useAuthenticatedUserContext();

  return (
    <>
      <h1>Se connecter</h1>
      <LoginForm />

      {JSON.stringify(context.state)}
    </>
  );
};
