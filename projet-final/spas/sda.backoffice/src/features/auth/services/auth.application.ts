import { LoginFormData, PostOneUser } from "../custom-types";
import {
  getAuthDataFromApi,
  // getAuthenticatedUserFromApi,
  LoginResponse,
} from "./auth.infrastructure";

async function logIn(
  formData: LoginFormData,
  api: PostOneUser
): Promise<LoginResponse> {
  const result = await api(formData);
  return result;
}

function factoryLogInUser(
  loginFormData: LoginFormData
): Promise<LoginResponse> {
  return logIn(loginFormData, getAuthDataFromApi);
}

const business = {
  // getAuthenticatedUser: getAuthenticatedUserFromApi,
  login: factoryLogInUser,
};

export default business;
