import React from "react";
import Scoreboard from "./components/Scoreboard";
import TitleHeader from "./components/TitleHeader";

const App = () => {
  const [currentScore, setCurrentScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);

  return (
    <div className="main-container">
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <TitleHeader />
      
    </div>
  );
};

export default App;
