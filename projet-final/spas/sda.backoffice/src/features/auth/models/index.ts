import { StorageValue } from "../../../shared/types";

export type User = {
  email: StorageValue;
  username: StorageValue;
};

export interface LoginData {
  login: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  username: string;
}
