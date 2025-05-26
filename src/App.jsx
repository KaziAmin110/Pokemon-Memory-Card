import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import TitleHeader from "./components/TitleHeader";
import CardsSection from "./components/CardsSection";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="main-container">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <TitleHeader />
      <CardsSection currentScore={currentScore} onUpdateCurrentScore={setCurrentScore} bestScore={bestScore} onUpdateBestScore={setBestScore}/>
    </div>
  );
};

export default App;
