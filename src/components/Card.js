import classes from '../styles/Card.module.css';

const Card = (props) => {
  return (
    <div
      className={classes.card}
      onClick={() => props.clickedCard(props.card.id)}
    >
      <h3>{props.card.title}</h3>
      <h5>Picture Here</h5>
    </div>
  );
};

export default Card;
