import axiosClient from "../../../axiosClient";
import { LoginFormData } from "../custom-types";
import { LoginResponse } from "../models";

export async function getAuthDataFromApi(
  formLoginData: LoginFormData
): Promise<LoginResponse> {
  const { login, password } = formLoginData;

  const response = axiosClient.post<LoginResponse>("/api/auth/login", {
    login,
    password,
  });

  const result = await response;

  return result.data;
}
