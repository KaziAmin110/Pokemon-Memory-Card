import React from "react";
const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard-info">
        <h3>Current Score: {currentScore}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Scoreboard;
