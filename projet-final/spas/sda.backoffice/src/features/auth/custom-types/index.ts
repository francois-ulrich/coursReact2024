import { PostOne } from "../../../shared/models/custom.types";
import { LoginResponse } from "../services/auth.infrastructure";

export type LoginFormData = {
  login: string;
  password: string;
};

export type PostOneUser = PostOne<LoginFormData, LoginResponse>;
