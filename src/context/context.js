import React, { useState } from 'react';
const context = React.createContext();
function ContextProvider({ children }) {
  const [cards, setCards] = useState([]);

  function handleAddCard(e) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    console.log('add another card');
    setCards((prevState) => [...prevState, randomNumber]);
    console.log(cards);
  }

  function handleCardDelete(e) {
    console.log('card delete');
  }
  function handleSortCard(e) {
    let sortedCards = cards.sort((a, b) => a - b);
    setCards(sortedCards);
    console.log(cards);
  }
  return (
    <context.Provider
      value={{
        cards,
        setCards,
        handleAddCard,
        handleSortCard,
        handleCardDelete,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
