import CardContainer from './components/CardContainer.js';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <h1>Memory Card</h1>
      <span>{score}</span>
      <span>{highScore}</span>
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
