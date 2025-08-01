import React, { useState, useEffect } from "react";
import Box from "./Box"


// GANADORES
const winningComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//LOGICA WINNER
const getWinner = (squares) => {
  for (let [a, b, c] of winningComb) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};


//JUEGO
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  const [winner, setWinner] = useState(null);


  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = squares.slice();
    newSquares[i] = next ? "X" : "O";
    setSquares(newSquares);
    setNext(!next);

    const result = getWinner(newSquares);
    if (result) {
      setWinner(result);
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setNext(true);
    setWinner(null);
  };

  let status;

  if (winner) {
    status = `Ganador: ${winner}`;
  } else if (squares.every(Boolean)) {
    status = "Empate";
  } else {
    status = `Turno : ${next ? "X" : "O"}`;
  }
  /*console.log(status);*/
  return (
    <div className="game text-center">
      <h3 className={winner ? "winner" : ""}>{status}</h3>
      <div
        className="board">
        {squares.map((val, i) => (
          <Box key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button className="btn btn-danger mt-4" onClick={handleReset}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default TicTacToe;