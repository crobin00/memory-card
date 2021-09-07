import Card from './Card.js';
import classes from '../styles/CardContainer.module.css';
import { useState } from 'react';

const CardContainer = () => {
  const [selected, setSelected] = useState([
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

  const selectedCard = (id) => {
    console.log('selected', id);
  };

  return (
    <div className={classes.container}>
      {selected.map((currentCard) => {
        return (
          <Card
            selectedCard={selectedCard}
            card={currentCard}
            key={currentCard.id}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
