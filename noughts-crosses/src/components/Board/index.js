import React from "react";
import Square from "../Square"

const Board = ({squares, onClick}) => {
  return <div>
{squares.map((square, i) => (
  <Square key={i} value={square} onclick={() => onclick(i)} />
)) }

  </div>;
};

export default Board;
