import React, { useState } from 'react';
const context = React.createContext();
function ContextProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  async function handleAddCard(e) {
    try {
      setIsSorted(false);
      const proxy = 'https://thingproxy.freeboard.io/fetch/';
      const response = await fetch(
        'https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new'
      );

      const randomNumber = await response.json();

      setCards((prevState) => [...prevState, randomNumber]);
    } catch (err) {
      console.error(err);
    }
  }

  function handleDeleteCard(e, props) {
    let array = [...cards];
    array.splice(props.id, 1);
    setCards(array);
  }

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
