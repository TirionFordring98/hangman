import React from "react";
// ScoreClass prop.
const Score = ({ score, scoreClass }) => {
  return (
    <div className={scoreClass}>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default Score;
