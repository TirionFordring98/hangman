import React from "react";

const EndGame = ({ isWinner, solution }) => {
  return (
    <div>
      {isWinner ? (
        <h2>Congratulations! You won!</h2>
      ) : (
        <h2>Game Over. Correct Word is {solution.word}</h2>
      )}
    </div>
  );
};

export default EndGame;
