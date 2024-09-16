import { Character } from "./Character";
import { Move, WithMovement } from "./custom-types";

let gon = new Character("Gon");

function makeCharacterMove(character: Move): void {
  // +/- une interface
  character.move("Greed Island");
}

makeCharacterMove(gon);

let kirua: Character = {
  name: "Kirua",
  role: "Hunter",
  move: () => {
    console.info(`Kirua walks forward to ${location}.`);
  },
  attack: () => {
    console.info("Kirua conjures electricity towards his enemy");
  },
};

makeCharacterMove(kirua);

let kurapika: Character = {
  name: "Kurapika",
  role: "Hunter",
  attack: () => {},
  move: () => {
    console.info(`Kurapika walks forward to ${location}.`);
  },
};

makeCharacterMove(kurapika);

const hisoka: WithMovement = {
  move: () => {
    console.info(`Hisoka walks forward to ${location}..`);
  },
};

makeCharacterMove(hisoka);
