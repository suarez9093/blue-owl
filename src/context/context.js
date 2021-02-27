import React, { useState } from 'react';
const context = React.createContext();
function ContextProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  async function handleAddCard(e) {
    setIsSorted(false);
    const response = await fetch(
      'https://thingproxy.freeboard.io/fetch/http://www.randomnumberapi.com/api/v1.0/random?min=0&max=100&count=1'
    );
    const randomNumber = await response.json();
    setCards((prevState) => [...prevState, randomNumber]);
  }

  function handleDeleteCard(e) {}
  function handleSortCard(e) {
    let sortedCards = cards.sort((a, b) => a - b);
    setCards(sortedCards);
    setIsSorted(true);
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
