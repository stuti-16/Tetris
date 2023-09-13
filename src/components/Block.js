import React from "react";
import { StyleBlock } from "./Styles/StyleBlock";
import { SHAPES } from "../shapes";

const Block = ({ type }) => <StyleBlock type={"L"} color={SHAPES["L"].color} />;

export default Block;
