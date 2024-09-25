import { Character } from "../models";

const url = "https://the-one-api.dev/v2/character?limit=30";
const apiToken = "hthfy8nI-pZho36BEywH";

export interface CharacterApiReturnType {
  _id: string;
  name: string;
  gender: string;
  race: string;
}

export interface ApiReturnType {
  docs: CharacterApiReturnType[];
}

export function getRequestHeader() {
  return {
    Authorization: `Bearer ${apiToken}`,
  };
}

/**
 *
 * @returns Get a list of characters from the api
 */

async function getAllCharactersFromApiRaw(): Promise<ApiReturnType> {
  const headers = getRequestHeader();
  const response = await fetch(url, { headers });
  const result = (await response.json()) as ApiReturnType;
  return result;
}

async function getAllCharactersFromApiBase(
  fetchRaw: () => Promise<ApiReturnType>
): Promise<Character[]> {
  // return new Promise<Character[]>((resolve) => {
  //   fetchRaw().then((res) => {
  //     resolve(res.docs);
  //   });
  // });

  const rawRes = await fetchRaw();
  return rawRes.docs.map((doc) => ({
    id: doc._id,
    name: doc.name,
  }));
}

export async function getAllCharactersFromApi(): Promise<Character[]> {
  return getAllCharactersFromApiBase(getAllCharactersFromApiRaw);
}

// export function getAllCharactersFromApi(): Promise<Character[]> {
//   return new Promise<Character[]>((resolve, reject) => {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${apiToken}`, // Le header d'authentification
//         "Content-Type": "application/json", // Optionnel, selon ce que vous envoyez ou attendez
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return Promise.reject(
//             new Error(`HTTP error! Status: ${response.status}`)
//           );
//         }
//         return response.json();
//       })
//       .then((data: unknown) => {
//         if (!isInstanceOfResponse(data))
//           return Promise.reject(new Error(`Data doesn't implement type`));

//         const characters = (data as ApiReturnType).docs;

//         resolve(characters);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);

//         reject("sorry nothing");
//       });
//   });
// }
