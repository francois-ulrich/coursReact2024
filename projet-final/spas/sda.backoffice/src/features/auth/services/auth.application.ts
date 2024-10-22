import {
  getAuthDataFromApi,
  getAuthenticatedUserFromApi,
} from "./auth.infrastructure";

const business = {
  getAuthenticatedUser: getAuthenticatedUserFromApi,
  login: getAuthDataFromApi,
};

export default business;
