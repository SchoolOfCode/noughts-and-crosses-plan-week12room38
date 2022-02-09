import React, { useState } from "react";
import Board from "../Board";
import PlayerTurn from "../PlayerTurn";
import Winner from "../Winner";

const Game = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  function makeAMove() {
    if (square !== null) {
      return "Pick another square";
    } else if (square === null) {
      setPlayer(player === "X" ? "O" : "X");
      if ("X" === true) {
        setSquare(square + "X");
      } else if ("X" === false) {
        setSquare(square + "O");
      }
    }
  }

  // currentPlayer = currentPlayer === "X" ? "O" : "X";

  return (
    <div>
      <Board />
      <PlayerTurn />
      <Winner />
    </div>
  );
};

export default Game;
