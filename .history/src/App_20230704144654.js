import React, { useState, useEffect } from 'react';
import "./style.css"

import Header from "./Header"
import CardContainer from "./CardContainer";

function App() {
  const[score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const [cards, updateCards] = useState([
    { id: 1, name: 'Isaac', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64491.png?updated=1460951999' },
    { id: 2, name: 'Magdalene', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64498.png?updated=1460951999' },
    { id: 3, name: 'Cain', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64589.png?updated=1460952006' },
    { id: 4, name: 'Judas', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/63/66588.png?updated=1460952151' },
    { id: 5, name: '???', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64500.png?updated=1460952000' },
    { id: 6, name: 'Eve', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/63/66587.png?updated=1460952151' },
    { id: 7, name: 'Samson', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/61/64499.png?updated=1460951999' },
    { id: 8, name: 'Azazel', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/78/81088.png?updated=1469918302' },
    { id: 9, name: 'Lazarus', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/63/66615.png?updated=1460952153' },
    { id: 10, name: 'Eden', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/96/99086.png?updated=1508945174' },
    { id: 11, name: 'Apollyon', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/86/88871.png?updated=1487622175' },
    { id: 12, name: 'Lilith', clicked: false, src: 'https://www.spriters-resource.com/resources/sheet_icons/73/76018.png?updated=1465922550' }
  ]);

  const randomizeCards = () => {
    const newCards = [...cards];
    for (var i = newCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newCards[i];
      newCards[i] = newCards[j];
      newCards[j] = temp;
    }
    updateCards(newCards);
  }

  const cardClicked = (cardID) => () => {
    const updatedCards = cards.map(card => {
      if (card.id === cardID && !card.clicked) {
        setScore(score => score + 1);
        if (highscore < score) {
          setHighscore(score);
        }
      } else {
        setScore(0);
      }
      card.clicked = true;
      return card;
    });

    updateCards(updatedCards);
    randomizeCards();
  }

  useEffect(() => {
    randomizeCards();
  }, []);

  return (
    <div id='content'>
      <Header score={score}>
      </Header>
      <CardContainer cards={cards} cardClicked={cardClicked}>
      </CardContainer>
    </div>
  );
}

export default App;
