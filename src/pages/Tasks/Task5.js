import React, { useState } from 'react';
import './Task5.css';

const Task5 = () => {
  const [board, setBoard] = useState(Array(9).fill('-'));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [turnCount, setTurnCount] = useState(0);
  const [winningPattern, setWinningPattern] = useState([]);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    if (board[index] === '-' && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setTurnCount(turnCount + 1);

      const nextPlayer = player === 'X' ? 'O' : 'X';
      setPlayer(nextPlayer);

      checkWin(newBoard);
    }
  };

  const checkWin = (newBoard) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] !== '-' && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningPattern([a, b, c]); // Save the winning combination
        return;
      }
    }
    if (turnCount === 8) {
      setWinner('Draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill('-'));
    setPlayer('X');
    setWinner(null);
    setTurnCount(0);
    setWinningPattern([]); // Reset the winning combination
  };

  return (
    <main className="container main d-flex flex-column align-items-center justify-content-center my-5">
      <h1 className="text-lighter h1-tikCross">Tic Tac Toe</h1>
      <p className="turn text-light-emphasis">
        {winner ? (winner === 'Draw' ? 'Game DRAW' : `${winner} wins`) : `Player ${player}'s turn`}
      </p>
      <div className="game">
        {board.map((value, index) => (
          <button
            key={index}
            className={`box ${winningPattern.includes(index) ? 'boxWin' : ''}`} // Highlight only winning boxes
            onClick={() => handleClick(index)}
            disabled={value !== '-' || winner}
          >
            {value}
          </button>
        ))}
      </div>
      <button id="reset" onClick={resetGame}>Reset</button>
    </main>
  );
};

export default Task5;
