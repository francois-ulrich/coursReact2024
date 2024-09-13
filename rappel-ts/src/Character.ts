/**
 * Class for all characters
 */
export class Character {
  constructor(public name: string) {}
  move(): void {
    console.info("i'm moving");
  }
}
