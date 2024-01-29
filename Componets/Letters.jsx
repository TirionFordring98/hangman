import React from "react";
import LetterStatus from "./LetterStatus";
import Letter from "./Letter";

const Letters = ({ letterStatus }) => {
  const lettersArray = Object.keys(letterStatus);

  return (
    <div>
      <LetterStatus letterStatus={letterStatus}></LetterStatus>
      {lettersArray.map((letter) => (
        <Letter key={letter.charCodeAt(0)} letter={letter} />
      ))}
    </div>
  );
};

export default Letters;
