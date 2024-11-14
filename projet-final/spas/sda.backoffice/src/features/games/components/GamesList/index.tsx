/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Col, Row } from "react-bootstrap";
import { Game } from "../../models";
import { GameTitle } from "../GameTitle";
import { useEffect, useState } from "react";
import GamesTable from "../GamesTable";
import business from "../../services/games.application";

const GamesList = () => {
  const displayTitle = true;

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    business.getAll().then((res) => {
      setGames(res);
    });
  }, []);

  const gameTableComponent = (
    <>
      {displayTitle && <GameTitle></GameTitle>}
      <Row>
        <Col>
          <GamesTable games={games}></GamesTable>
        </Col>
      </Row>
    </>
  );

  return gameTableComponent;
};

export default GamesList;
