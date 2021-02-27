import React, { useState } from 'react';
const context = React.createContext();
function ContextProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  function handleAddCard(e) {
    setIsSorted(false);
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    console.log('add another card');
    setCards((prevState) => [...prevState, randomNumber]);
    console.log(cards);
  }

  function handleDeleteCard(e) {
    console.log('card delete');
  }
  function handleSortCard(e) {
    let sortedCards = cards.sort((a, b) => a - b);
    setCards(sortedCards);
    setIsSorted(true);
    console.log(cards);
  }
  return (
    <context.Provider
      value={{
        isSorted,
        cards,
        setCards,
        handleAddCard,
        handleSortCard,
        handleDeleteCard,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { ContextProvider, context };
