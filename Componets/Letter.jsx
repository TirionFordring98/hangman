import React from "react";

const Letter = ({ letter, status, checked, LetterClick }) => {
  const letterStyle = {
    display: "inline-block",
    margin: "4px",
  };
  if (checked) {
    letterStyle.textDecoration = "line-through";
  }

  return (
    <div onClick={() => LetterClick(letter)} style={letterStyle}>
      {status && !checked ? "-" : letter}
    </div>
  );
};

export default Letter;
