import Card from './Card.js';
import classes from '../styles/CardContainer.module.css';
import { useState } from 'react';

const CardContainer = () => {
  const [cardArray, setCardArray] = useState([
    {
      title: 'Card 1',
      selected: false,
      id: 1,
    },
    {
      title: 'Card 2',
      selected: false,
      id: 2,
    },
  ]);

  //Will set selected value to true. If already true, end game
  const clickedCard = (id) => {
    console.log(id);
    cardArray.forEach((card) => {
      if (card.id === id) {
        if (card.selected) {
          console.log('game over');
        }
        card.selected = true;
        randomlySort();
        console.log('called');
      }
    });
  };

  //Randomly positions cards
  const randomlySort = () => {
    let newArray = cardArray
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return {
          title: card.title,
          selected: card.selected,
          id: card.id,
        };
      });
    setCardArray(newArray);
    console.log(cardArray);
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
