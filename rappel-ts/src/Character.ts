import { Location, WithMovement } from "./custom-types";

/**
 * Class for all characters
 */
export class Character implements WithMovement {
  role: string | null | undefined;

  constructor(public name: string) {}

  move(location: Location): void {
    console.info(`${this.name} is moving to ${location} !`);
  }

  attack(): void {
    if (typeof this.role !== "string") return;

    console.info(`The ${this.role.toUpperCase()} attacks !`);
  }
}
