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
      { word: "Alo", hint: "Wlk ..." },
    ];

    const randomIndex = Math.floor(Math.random() * wordHintPairs.length);

    return {
      word: wordHintPairs[randomIndex].word,
      hint: wordHintPairs[randomIndex].hint,
      letterStatus: generateLetters(),
    };
  }

  const isWinner = () => {
    return solution.word
      .split("")
      .every((letter) => selectedLetters.includes(letter));
  };

  useEffect(() => {
    if (isWinner()) {
      console.log("Congratulations! You won!");
    }
  }, [selectedLetters, isWinner]);

  useEffect(() => {
    if (score >= 80) {
      setScoreClass("high-score");
      console.log("Score: " + score + " is now Green");
    } else if (score >= 50 && score < 80) {
      setScoreClass("medium-score");
      console.log("Score: " + score + " is now Orange");
    } else {
      setScoreClass("low-score");
      console.log("Score: " + score + " is now Red");
    }
  }, [score]);

  useEffect(() => {
    if (gameKey) {
      setLetterStatus(generateLetters());
      setSolution(generateSolution());
      setScore(100);
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
      setScore((prevScore) => prevScore + 5);
    } else {
      setScore((prevScore) => prevScore - 20);
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
