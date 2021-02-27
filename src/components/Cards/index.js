import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { context } from '../../context/context';

function Cards() {
  const { cards, handleSortCards, isSorted } = useContext(context);

  return (
    <div className='cards'>
      {isSorted && cards.map((card, index) => <Card key={index} card={card} />)}
      {!isSorted &&
        cards.map((card, index) => <Card key={index} card={card} />)}
    </div>
  );
}
export default Cards;
