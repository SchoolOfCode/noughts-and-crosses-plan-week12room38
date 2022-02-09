import React, { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "../Board";
// import Square from "../Square";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "❌" : "🟢";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  // ↓ attempt to display "it's a Draw"
  // function declareResult() {
  //   if (winner === true) {
  //     return "And the winner is :" + winner;
  //   } else if (winner === false) {
  //     if (Square === null) {
  //       return "Next Player: " + xO;
  //     } else if (Square !== null) {
  //       return "It's a draw!";
  //     }
  //   }
  // }

  return (
    <>
      <h1>Noughts and Crosses: Toni, Sagar and Kate</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        {/* <h3>The results are:</h3>
        {declareResult()} */}
      </div>
    </>
  );
};

export default Game;
