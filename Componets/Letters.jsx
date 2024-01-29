import React from "react";
import Letter from "./Letter";

const Letters = () => {
  const availableLetters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );
  return (
    <div>
      {/* The .JOIN is a method we can use on arrays that can join all the elements into a single string with a seperator (which is ' - ') */}
      <p>Available Letters: {availableLetters.join(" - ")}</p>
      <div>
        {/* {This JSX expression is used to render a paragraph (<p>) with the text "Available 
        Letters: " followed by the string created by joining the available letters with the 
        specified separator. The curly braces {} are used to embed JavaScript expressions inside JSX.} */}
        {availableLetters.map((letter) => (
          <Letter key={letter} value={letter} />
        ))}
      </div>
    </div>
  );
};

export default Letters;
