import React, { useState, useEffect } from "react";

const LetterStatus = () => {
  const [letterStatus, setLetterStatus] = useState({});

  const generateLetterStatuses = () => {
    const letterStatuses = {};
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      letterStatuses[letter] = false;
    }
    return letterStatuses;
  };

  useEffect(() => {
    setLetterStatus(generateLetterStatuses());
  }, []);

  return <div>{/* For future use */}</div>;
};

export default LetterStatus;
