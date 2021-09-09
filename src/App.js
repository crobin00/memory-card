import CardContainer from './components/CardContainer.js';
import Scoreboard from './components/Scoreboard.js';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'rgb(238, 224, 224)' }}>
        Album Memory Game
      </h1>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
