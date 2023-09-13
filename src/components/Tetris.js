import React from "react";
import { createStage } from "../game";
import { StyledTetrisWrapper, StyleTetris } from "./Styles/StyleTetris";

// Components
import Stage from "./Stage";
import Display from "./Display";
import Start from "./Start";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyleTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <Start />
        </aside>
      </StyleTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
