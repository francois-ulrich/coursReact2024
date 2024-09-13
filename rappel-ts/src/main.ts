import { Character } from "./Character";

let gon = new Character("Gon");

function makeCharacterMove(character: { move: () => void }) {
  // +/- une interface
  character.move();
}

makeCharacterMove(gon);

let kirua: Character = {
  name: "Kirua",
  move: () => {
    console.info("Kirua walks forward.");
  },
};

makeCharacterMove(kirua);

let kurapika = {
  name: "Kurapika",
  attack: () => {},
  move: () => {
    console.info("Kurapika walks forward.");
  },
};

makeCharacterMove(kurapika);

const hisoka = {
  move: () => {
    console.info("Hisoka walks forward.");
  },
};

makeCharacterMove(hisoka);
