import { Character } from "../models";

const url = "https://the-one-api.dev/v2/character";
const apiToken = "hthfy8nI-pZho36BEywH";

export interface Response {
  docs: Character[];
}

function hasProp<K extends PropertyKey>(
  obj: unknown,
  key: K | null | undefined
): obj is Record<K, unknown> {
  return key != null && obj != null && typeof obj === "object" && key in obj;
}

export const isInstanceOfResponse = (object: unknown): boolean => {
  if (!hasProp(object, "docs")) return false;

  (object.docs as Array<Character>).forEach((element: unknown) => {
    if (!hasProp(element, "name")) return false;
  });

  return true;
};

export function getAllCharactersByApi(): Promise<Character[]> {
  return new Promise<Character[]>((resolve, reject) => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`, // Le header d'authentification
        "Content-Type": "application/json", // Optionnel, selon ce que vous envoyez ou attendez
      },
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject(
            new Error(`HTTP error! Status: ${response.status}`)
          );
        }
        return response.json();
      })
      .then((data: unknown) => {
        if (!isInstanceOfResponse(data))
          return Promise.reject(new Error(`Data doesn't implement type`));

        const characters = (data as Response).docs;

        resolve(characters);
      })
      .catch((error) => {
        console.error("Fetch error:", error);

        reject("sorry nothing");
      });
  });
}
