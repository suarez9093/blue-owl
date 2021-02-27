import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <Cards />
      <Instructions />
      <Footer />
    </div>
  );
}

export default App;
