import React from "react";

const Letter = ({ letter }) => {
  console.log("Rendering Letter:", letter);
  return <span>{letter}</span>;
};

export default Letter;
