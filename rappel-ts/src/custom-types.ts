export type Move = {
  move: (location: Location) => void;
  speed?: number;
};

export type Location =
  | "Whale Island"
  | "Greed Island"
  | "Yorkshin City"
  | "NGL";

export interface WithMovement {
  move: (location: Location) => void;
}
