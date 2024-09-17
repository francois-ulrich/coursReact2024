/**
 * Composant représentant un tableau des games à gérer
 * @returns
 */

import { Col, Container, Row } from "react-bootstrap";
import GameTable from "../GameTable";
import { Game } from "../../models";
import { getGameList } from "../../services";

const GameList = () => {
  const gameList: Game[] = getGameList();

  const gameTableComponent = (
    <>
      <Container>
        <Row>
          <Col>
            <GameTable games={gameList}></GameTable>
          </Col>
        </Row>
      </Container>
    </>
  );

  return gameTableComponent;
};

export default GameList;
