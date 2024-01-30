import React from "react";
import Letter from "./Letter";

const Letters = ({ letterStatus, LetterClick }) => {
  const lettersArray = Object.keys(letterStatus);

  return (
    <div>
      {lettersArray.map((letter) => {
        // const asciiValue = letter.charCodeAt(0);
        const isLetterSelected = letterStatus[letter].status;
        const checked = letterStatus[letter].checked;
        return (
          <Letter
            key={letter}
            letter={letter}
            status={isLetterSelected}
            checked={checked}
            LetterClick={LetterClick}
          />
        );
      })}
    </div>
  );
};

export default Letters;
