import classes from '../styles/Scoreboard.module.css';

const Scoreboard = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <span>Score: {props.score}</span>
      </div>
      <div>
        <span>Best Score: {props.highScore}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
