import React from "react";
import Score from "../Componets/Score";
import Solution from "../Componets/Solution";
import Letters from "../Componets/Letters";
import Hangman from "../Componets/Hangman";
import { useGameLogic } from "../Logic/gameLogic";

const App = () => {
  const { selectedLetters, letterStatus, solution, score, handleLetterClick } =
    useGameLogic();

  const LetterClick = (letter) => {
    handleLetterClick(letter);
  };

  return (
    <div>
      <h1>Hang,Me,Man Game</h1>
      <h3>(this is not a joke, this is a genuine call for help)</h3>
      <Score score={score} />
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
