import classes from '../styles/Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <h1>Game over</h1>
      <p>Score: {props.score}</p>
      <button onClick={props.closeModal}>Play again</button>
    </div>
  );
};

export default Modal;
