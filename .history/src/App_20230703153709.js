import React, { useState } from 'react';
import "./style.css"

import Header from "./Header"
import CardContainer from "./CardContainer";

function App() {
  const[cards, updateCards] = useState([
    {name:'Isaac', clicked: false},
    {name:'Magdalene', clicked: false},
    {name:'Cain', clicked: false },
    {name:'Judas', clicked: false },
    {name:'???', clicked: false },                         
    {name:'Eve', clicked: false },
    {name:'Samson', clicked: false },
    {name:'Azazel', clicked: false },
    {name:'Lazarus', clicked: false },
    {name:'Eden', clicked: false },
    {name:'The Lost', clicked: false },
    {name:'Lilith', clicked: false },
  ]);

  const randomizeCards = () => {
    const newCards = [...cards];
    for (var i = newCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newCards[i];
      newCards[i] = newCards[j];
      newCards[j] = temp;
    }
  }

  return (
    <div>
      <Header></Header>
      <CardContainer cards={cards}>
        
      </CardContainer>
    </div>
  );
}

export default App;
