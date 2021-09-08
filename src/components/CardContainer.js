import Card from './Card.js';
import classes from '../styles/CardContainer.module.css';
import { useState, useEffect } from 'react';

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
    {
      title: 'Card 3',
      selected: false,
      id: 3,
    },
    {
      title: 'Card 4',
      selected: false,
      id: 4,
    },
  ]);

  useEffect(() => {
    console.log('changed effect');
  }, [cardArray]);

  //Will set selected value to true. If already true, end game
  const clickedCard = (id) => {
    cardArray.forEach((card) => {
      if (card.id === id) {
        if (card.selected) {
          gameOver();
        } else {
          card.selected = true;
        }
      }
    });
    randomlySort();
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
  };

  const gameOver = () => {
    alert('game over');
    cardArray.forEach((card) => {
      card.selected = false;
    });
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
