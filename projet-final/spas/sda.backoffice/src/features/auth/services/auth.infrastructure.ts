import { LoginFormData } from "../custom-types";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export async function getAuthDataFromApi(
  formLoginData: LoginFormData
): Promise<LoginResponse> {
  const { email, password } = formLoginData;

  const response = await fetch("https://localhost:7207/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    // credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  const result = (await response.json()) as LoginResponse;
  return result;
}
