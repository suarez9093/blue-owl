import React, { useContext } from 'react';
import { context } from '../../../context/context';
function Card({ card }) {
  const { handleDeleteCard } = useContext(context);
  console.log('card', card);
  return (
    <div className='card'>
      {card} <button onClick={handleDeleteCard}>X</button>
    </div>
  );
}
export default Card;
