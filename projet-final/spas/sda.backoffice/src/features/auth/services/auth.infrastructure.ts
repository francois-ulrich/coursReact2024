import { LoginFormData } from "../custom-types";
import { LoginResponse } from "../models";

export async function getAuthDataFromApi(
  formLoginData: LoginFormData
): Promise<LoginResponse> {
  const { login, password } = formLoginData;

  const response = await fetch("https://localhost:7207/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    }),
    credentials: "include",
  });
  const result = (await response.json()) as LoginResponse;
  return result;
}
