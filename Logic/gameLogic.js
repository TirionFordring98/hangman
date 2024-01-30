import { useState } from "react";

export const useGameLogic = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  const generateLetters = () => {
    const letterStatuses = {};
    for (let i = 65; i < 91; i++) {
      letterStatuses[String.fromCharCode(i)] = { status: false };
    }
    return letterStatuses;
  };
  const LetterStatus1 = generateLetters();

  const [letterStatus, setLetterStatus] = useState(LetterStatus1);

  const [solution, setSolution] = useState({
    word: "EAGLE",
    hint: "What do I bear?",
    letterStatus: letterStatus,
  });

  const [score, setScore] = useState(0);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

    const newLetterStatus = letterStatus;
    newLetterStatus[letter].status = !letterStatus[letter].status;
    newLetterStatus[letter].checked = true;
    if (solution.word.includes(letter)) {
      newLetterStatus[letter].checked = false;
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 100);
    }
    setLetterStatus(newLetterStatus);
  };

  return {
    selectedLetters,
    letterStatus,
    solution,
    score,
    setScore,
    handleLetterClick,
  };
};
