import { useState, useEffect } from "react";
import "../css/score.css";

export const useGameLogic = (gameKey) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [letterStatus, setLetterStatus] = useState(generateLetters());
  const [solution, setSolution] = useState(generateSolution());
  const [score, setScore] = useState(100);
  const [scoreClass, setScoreClass] = useState("high-score");

  function generateLetters() {
    const letterStatuses = {};
    for (let i = 65; i < 91; i++) {
      letterStatuses[String.fromCharCode(i)] = { status: false };
    }
    return letterStatuses;
  }

  function generateSolution() {
    const wordHintPairs = [
      { word: "EAGLE", hint: "What do I bear?" },
      { word: "LIGHT", hint: "We Work in the Dark to Serve in the ... " },
      { word: "FLOWER", hint: "In Carnage I Bloom like a ..... In the Dawn" },
      {
        word: "CHAD",
        hint: "A Masculine Compliment (Adjective) and a Country's Name ",
      },
      { word: "ALO", hint: "Wlk ..." },
    ];

    const randomIndex = Math.floor(Math.random() * wordHintPairs.length);

    return {
      word: wordHintPairs[randomIndex].word,
      hint: wordHintPairs[randomIndex].hint,
      letterStatus: generateLetters(),
    };
  }

  const isWinner = () => {
    console.log(solution.word);
    return solution.word
      .split("")
      .every((letter) => selectedLetters.includes(letter));
  };

  useEffect(() => {
    if (isWinner()) {
      console.log("Congratulations! You won! (function");
    }
  }, [selectedLetters]);

  useEffect(() => {
    if (score >= 80) {
      setScoreClass("high-score");
    } else if (score >= 50 && score < 80) {
      setScoreClass("medium-score");
    } else {
      setScoreClass("low-score");
    }
  }, [score]);

  useEffect(() => {
    console.log(gameKey, score);
    if (gameKey) {
      setLetterStatus(generateLetters());
      setSolution(generateSolution());
      setScore(100);
      setSelectedLetters([]);
      console.log("restarting game");
    }
  }, [gameKey]);

  const handleLetterClick = (letter) => {
    setSelectedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

    const newLetterStatus = { ...letterStatus };
    newLetterStatus[letter] = {
      ...newLetterStatus[letter],
      status: !newLetterStatus[letter].status,
      checked: true,
    };

    if (solution.word.includes(letter)) {
      newLetterStatus[letter].checked = false;
      setScore(score + 5);
    } else {
      setScore(score - 20);
    }

    setLetterStatus(newLetterStatus);
  };

  return {
    selectedLetters,
    letterStatus,
    solution,
    score,
    scoreClass,
    setScore,
    handleLetterClick,
    isWinner,
  };
};
