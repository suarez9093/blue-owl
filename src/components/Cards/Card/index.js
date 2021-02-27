import React, { useContext } from 'react';
import { context } from '../../../context/context';
function Card({ card }) {
  const { handleCardDelete } = useContext(context);
  console.log('card', card);
  return (
    <div className='card'>
      {card} <button onClick={handleCardDelete}>X</button>
    </div>
  );
}
export default Card;
