import React from "react";
import Letter from "./Letter";

const Solution = ({ word, hint, letterStatus }) => {
  const wordString = word && typeof word === "string" ? word : "";
  const wordArray = wordString.split("");

  return (
    <div>
      <h2>Solution</h2>
      <div>
        <p>Hint: {hint}</p>
        {wordArray.map((letter, index) => (
          <Letter
            key={index}
            letter={letterStatus[letter].status ? letter : "-"}
          />
        ))}
      </div>
    </div>
  );
};

export default Solution;
