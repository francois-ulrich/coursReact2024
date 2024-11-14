import { AxiosResponse } from "axios";
import axiosClient from "../../../axiosClient";
import { LoginFormData } from "../custom-types";
import { LoginResponse } from "../models";

export async function getLoginFromApi(
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

export async function getAuthenticatedUserFromApi(): Promise<
  AxiosResponse<LoginResponse>
> {
  const response = axiosClient.get<LoginResponse>("/api/auth/me");
  const result = await response;
  return result;
}
