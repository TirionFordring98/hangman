import React from "react";
import Score from "../Componets/Score";
import Solution from "../Componets/Solution";
import Letters from "../Componets/Letters";
import Hangman from "../Componets/Hangman";

const App = () => {
  return (
    <div>
      <h1>Hang,Me,Man Game</h1>
      <h3>(this is not a joke, this is a genuine call for help)</h3>
      <Score />
      <Hangman />
      <Solution />
      <Letters />
    </div>
  );
};

export default App;
