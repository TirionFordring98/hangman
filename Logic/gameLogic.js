import { useState } from "react";

export const useGameLogic = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [letterStatus, setLetterStatus] = useState(() => {
    const initialStatus = {};
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      initialStatus[letter] = false;
    }
    return initialStatus;
  });

  const LetterStatus = {
    65: true,
    66: false,
    67: false,
    68: false,
    69: true,
    70: false,
    71: false,
    72: false,
    73: false,
    74: false,
    75: false,
    76: false,
    77: false,
    78: false,
    79: false,
    80: false,
    81: false,
    82: false,
    83: true,
    84: false,
    85: false,
    86: false,
    87: false,
    88: false,
    89: true,
    90: false,
  };

  const [solution, setSolution] = useState({
    word: "EAGLE",
    hint: "What do I bear?",
    letterStatus: LetterStatus,
  });

  const [score, setScore] = useState(0);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

    setLetterStatus((prevStatus) => {
      return {
        ...prevStatus,
        [letter]: !prevStatus[letter],
      };
    });

    setScore((prevScore) => prevScore + 1);
  };

  return {
    selectedLetters,
    letterStatus,
    solution,
    score,
    handleLetterClick,
  };
};
