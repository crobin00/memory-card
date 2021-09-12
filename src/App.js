import CardContainer from './components/CardContainer.js';
import Scoreboard from './components/Scoreboard.js';
import Modal from './components/Modal.js';
import Backdrop from './components/Backdrop.js';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setScore(0);
    setModalIsOpen(false);
  };

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
        setModalIsOpen={setModalIsOpen}
      />

      {/* Modal on gameover loss */}
      {modalIsOpen && score !== 12 ? (
        <Modal score={score} closeModal={closeModal} text={'Game Over'} />
      ) : null}
      {modalIsOpen ? <Backdrop closeModal={closeModal} /> : null}

      {/* Modal on gameover win */}
      {modalIsOpen && score === 12 ? (
        <Modal score={score} closeModal={closeModal} text={'You win!'} />
      ) : null}
    </div>
  );
}

export default App;
