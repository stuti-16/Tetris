import React from "react";
import { StyleStage } from "./Styles/StyleStage";

import Block from "./Block";

const Stage = ({ stage }) => (
  <StyleStage width={stage[0].length} height={stage.length}>
    {stage.map((row) =>
      row.map((block, x) => <Block key={x} type={block[0]} />)
    )}
  </StyleStage>
);

export default Stage;
