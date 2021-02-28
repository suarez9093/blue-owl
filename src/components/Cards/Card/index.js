import React, { useContext } from 'react';
import { context } from '../../../context/context';
function Card(props) {
  console.log('props ', props);
  const { handleDeleteCard } = useContext(context);

  return (
    <div className='card'>
      {props.card}
      <button onClick={(e) => handleDeleteCard(e, props)} className='btn'>
        x
      </button>
    </div>
  );
}
export default Card;
