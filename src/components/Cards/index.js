import React, { useContext, useEffect } from 'react';
import Card from './Card';
import { context } from '../../context/context';

function Cards() {
  const { cards, handleSortCards } = useContext(context);

  //   useEffect(() => {
  //     return (
  //       <div className='cards'>
  //         {cards.map((card, index) => (
  //           <Card key={index} card={card} />
  //         ))}
  //       </div>
  //     );
  //   }, [cards, handleSortCards]);
  return (
    <div className='cards'>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}
export default Cards;
