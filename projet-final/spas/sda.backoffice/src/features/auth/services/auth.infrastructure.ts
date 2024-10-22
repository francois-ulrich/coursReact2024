export interface LoginData {
  username: string;
  password: string;
}

export interface DummyAuth {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
}

export async function getAuthDataFromApi(
  username: string,
  password: string
): Promise<DummyAuth> {
  const response = await fetch("https://dummyjson.com/auth/login", {
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

export async function getAuthenticatedUserFromApi(
  token: string
): Promise<DummyAuth> {
  const response = await fetch("https://dummyjson.com/user/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = (await response.json()) as DummyAuth;
  return result;
}
