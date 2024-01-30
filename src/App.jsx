import React, { useState } from "react";
import Score from "../Componets/Score";
import Solution from "../Componets/Solution";
import Letters from "../Componets/Letters";
import Hangman from "../Componets/Hangman";
import EndGame from "../Componets/EndGame";
import { useGameLogic } from "../Logic/gameLogic";
import "./App.css";

const App = () => {
  const [gameKey, setGameKey] = useState(0);
  const {
    selectedLetters,
    letterStatus,
    score,
    scoreClass,
    solution,
    handleLetterClick,
    isWinner,
  } = useGameLogic(gameKey);

  const restartGame = () => {
    setGameKey(gameKey + 1);
  };

  const LetterClick = (letter) => {
    handleLetterClick(letter);
  };

  return isWinner() || score <= 0 ? (
    <div>
      <EndGame isWinner={isWinner()} solution={solution} />
      <button onClick={restartGame}>Restart</button>
    </div>
  ) : (
    <div>
      <h1>Hang,Me,Man Game</h1>
      <h3>(this is not a joke, this is a genuine call for help)</h3>
      <Score score={score} scoreClass={scoreClass} />
      <Hangman />
      <Solution
        word={solution.word}
        hint={solution.hint}
        letterStatus={letterStatus}
      />

      <Letters LetterClick={LetterClick} letterStatus={letterStatus} />
    </div>
  );
};

export default App;
