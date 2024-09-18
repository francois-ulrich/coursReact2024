import { Games } from "./game";

export type Role = {
  label: string;
};

export type SuperRole = Role & {
  power: number;
};

export interface Person {
  firstName: string;
  birthDate: Date;
}

export interface Player extends Person {
  games?: Games;
  role: SuperRole;
}

// ===================

let netero: any = "Isaac Netero";

netero = {
  name: "a",
};

function hasProp<K extends PropertyKey>(
  obj: unknown,
  key: K | null | undefined
): obj is Record<K, unknown> {
  return key != null && obj != null && typeof obj === "object" && key in obj;
}

function displayCharacterName(character: unknown): void {
  if (typeof character === "string") {
    console.info(character.toLowerCase());
  }

  if (hasProp(netero, "name")) {
    console.info(netero.name);
  }
}

displayCharacterName(netero);
displayCharacterName("test");
