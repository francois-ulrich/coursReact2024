/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Col, Row } from "react-bootstrap";
import { Game } from "../../models";
import { getGameList } from "../../services";
import { GameTitle } from "../GameTitle";
import { useState } from "react";
import GamesTable from "../GamesTable";
// import { getAllCharactersFromApi } from "../../../characters/services/characters.infrastructure";

const GamesList = () => {
  // getAllCharactersFromApi()
  //   .then((characters) => {
  //     characters.forEach((character) => console.info(character));
  //   })
  //   .catch((error) => {
  //     console.error("Promise rejected with error: " + error);
  //   });

  const displayTitle = true;

  const [games, setGames] = useState<Game[]>(getGameList);

  const addGame = () => {
    const newGame = {
      id: games.length + 1,
      player: { name: "Irumi" },
      isWon: false,
    };

    setGames((games) => [...games, newGame]);
  };

  const changeGameIsWonStatus = (gameId: number, newIsWonState: boolean) => {
    setGames(
      games.map((game) => {
        if (game.id === gameId) {
          return { ...game, isWon: newIsWonState };
        } else {
          return game;
        }
      })
    );
  };

  const addGameButtonComponent = (
    <Row>
      <Col>
        <button onClick={addGame}>Add Game</button>
      </Col>
    </Row>
  );

  const gameTableComponent = (
    <>
      {displayTitle && <GameTitle></GameTitle>}
      {addGameButtonComponent}
      <Row>
        <Col>
          <GamesTable
            games={games}
            changeGameIsWonStatusCallback={changeGameIsWonStatus}
          ></GamesTable>
        </Col>
      </Row>
    </>
  );

  return gameTableComponent;
};

export default GamesList;
