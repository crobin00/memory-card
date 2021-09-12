import Card from './Card.js';
import classes from '../styles/CardContainer.module.css';
import { useState } from 'react';
import { albumList } from '../albums.js';

const CardContainer = (props) => {
  const [cardArray, setCardArray] = useState(albumList);

  //Will set clicked selected value to true. If already true, end game.
  //If all cards click, set high score to 12.
  const clickedCard = (id) => {
    cardArray.forEach((card) => {
      if (card.id === id) {
        if (card.selected) {
          if (props.score > props.highScore) {
            props.setHighScore(props.score);
          }
          gameOver();
        } else if (props.score < 11) {
          card.selected = true;
          props.setScore(props.score + 1);
        } else {
          props.setScore(props.score + 1);
          props.setHighScore(12);
          gameOver();
        }
      }
    });
    randomlySort();
  };

  //Randomly positions cards on page
  const randomlySort = () => {
    let newArray = cardArray
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return {
          title: card.title,
          src: card.src,
          selected: card.selected,
          id: card.id,
        };
      });
    setCardArray(newArray);
  };

  const gameOver = () => {
    cardArray.forEach((card) => {
      card.selected = false;
    });

    props.setModalIsOpen(true);
  };

  return (
    <div className={classes.container}>
      {cardArray.map((currentCard) => {
        return (
          <Card
            clickedCard={clickedCard}
            card={currentCard}
            key={currentCard.id}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
