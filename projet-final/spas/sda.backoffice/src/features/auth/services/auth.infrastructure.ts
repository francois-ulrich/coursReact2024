import { FormLoginData } from "../custom-types";

const url = "https://dummyjson.com/auth/login";

export interface DummyAuth {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
}

// async function getAuthenticationData(
//   fetchRaw: () => Promise<DummyAuthApiReturnType>
// ): Promise<> {
//   const rawRes = await fetchRaw();
// }

export async function getAuthDataFromApi(
  loginData: FormLoginData
): Promise<DummyAuth> {
  const { username, password } = loginData;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
    // credentials: "include", // Include cookies (e.g., accessToken) in the request
  });
  const result = (await response.json()) as DummyAuth;
  return result;
}

// export async function getAuthenticationDataFromApi(): Promise<DummyAuth> {
//   return getAuthDataFromApi();
// }
