import React, { useState } from 'react';
import "./style.css"

import Header from "./Header"
import CardContainer from "./CardContainer";

function App() {
  const[cards, updateCards] = useState([
    { name: 'Isaac', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64491.png?updated=1460951999'},
    { name: 'Magdalene', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64498.png?updated=1460951999'},
    { name: 'Cain', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64589.png?updated=1460952006'},
    { name: 'Judas', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/63/66588.png?updated=1460952151'},
    { name: '???', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64500.png?updated=1460952000'},                         
    { name: 'Eve', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/63/66587.png?updated=1460952151'},
    { name: 'Samson', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64499.png?updated=1460951999'},
    { name: 'Azazel', clicked: false, src: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/0/06/Character_Azazel_appearance.png/revision/latest?cb=20210824125228'},
    { name: 'Lazarus', clicked: false, src: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/7/78/Character_Lazarus_appearance.png/revision/latest?cb=20211111110428'},
    { name: 'Eden', clicked: false, src: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/8/83/Character_Eden_appearance.png/revision/latest?cb=20210826072021'},
    { name: 'The Lost', clicked: false, src: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/f/f0/Character_The_Lost_appearance.png/revision/latest?cb=20210826071932'},
    { name: 'Lilith', clicked: false, src: 'https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/a/a8/Character_Lilith_appearance.png/revision/latest?cb=20210821134536'}
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
