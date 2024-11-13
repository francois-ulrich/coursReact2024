import { LoginFormData, PostOneUser } from "../custom-types";
import { LoginResponse } from "../models";
import {
  getAuthenticatedUserFromApi,
  getLoginFromApi,
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
  return logIn(loginFormData, getLoginFromApi);
}

const business = {
  getAuthenticatedUser: getAuthenticatedUserFromApi,
  login: factoryLogInUser,
};

export default business;
