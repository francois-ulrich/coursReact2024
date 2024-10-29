import { useEffect, useState } from "react";
import { useAuthenticationContext } from "../../features/auth/store/authenticationContext";

export const HomepageView = () => {
  const authenticationContext = useAuthenticationContext();

  const initialWelcomeText = "Bienvenue";

  const [welcomeText, setWelcomeText] = useState<string>(initialWelcomeText);

  useEffect(() => {
    if (authenticationContext.state.authenticated) {
      setWelcomeText(
        `${initialWelcomeText}, ${authenticationContext.state.user?.firstName}`
      );
    } else {
      setWelcomeText(initialWelcomeText);
    }
  }, [authenticationContext]);

  return (
    <>
      <h1>{welcomeText}</h1>
    </>
  );
};
