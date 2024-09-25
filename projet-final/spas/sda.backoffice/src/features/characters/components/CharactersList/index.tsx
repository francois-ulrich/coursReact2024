/**
 * Head component that displays a list of characters
 */

import { useEffect, useState } from "react";
import { Character } from "../../models";
import business from "../../services/characters.application";

export const CharactersList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const characterDivList = characters.map((character, index) => (
    <div key={index}>{character.name}</div>
  ));

  // const id: number | undefined = undefined;

  useEffect(() => {
    business.getAll().then((res) => {
      setCharacters(res);
    });
  }, []);

  // useEffect(() => {
  //   id = setInterval(() => {
  //     console.info("hey");
  //   }, 500);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);

  return (
    <>
      <div>{characterDivList}</div>
    </>
  );
};
