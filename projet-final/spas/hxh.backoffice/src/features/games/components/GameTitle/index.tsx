import { useState } from "react";
import { Row, Col } from "react-bootstrap";

// export type GameTitleProps = {
//   label: string;
// };

export const GameTitle = () => {
  const [title, setTitle] = useState("Games list");

  const onClickToChangeTitle = () => {
    setTitle("test");
  };

  const component = (
    <>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={onClickToChangeTitle}>Change title</button>
        </Col>
      </Row>
    </>
  );

  return component;
};
