import React, { useState } from 'react';
import "./style.css"

import Header from "./Header"
import CardContainer from "./CardContainer";

function App() {
  const[cards, updateCards] = useState([
    { name: 'Isaac', clicked: false, img: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/e5/Character_Isaac_appearance.png/revision/latest?cb=20210818221550'},
    { name: 'Magdalene', clicked: false, img: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/bf/Character_Magdalene_appearance.png/revision/latest?cb=20210824111834'},
    { name: 'Cain', clicked: false, img: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/d/db/Character_Cain_appearance.png/revision/latest?cb=20211204211028'},
    { name: 'Judas', clicked: false, img: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Character_Judas_appearance.png/revision/latest?cb=20210826071249'},https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/8d/Character_Judas_appearance.png/revision/latest?cb=20210826071249
    { name: '???', clicked: false, img: },                         
    { name: 'Eve', clicked: false, img: },
    { name: 'Samson', clicked: false, img: },
    { name: 'Azazel', clicked: false, img: },
    { name: 'Lazarus', clicked: false, img: },
    { name: 'Eden', clicked: false, img: },
    { name: 'The Lost', clicked: false, img: },
    { name: 'Lilith', clicked: false, img: },
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
