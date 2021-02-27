import React, { useContext } from 'react';
import { context } from '../../context/context';
function Header() {
  const { handleAddCard, handleSortCard } = useContext(context);
  return (
    <header className='header'>
      <button onClick={handleAddCard} className='header-add-card-btn'>
        Add Card
      </button>
      <button onClick={handleSortCard} className='header-add-card-btn'>
        Sort Cards
      </button>
    </header>
  );
}
export default Header;
