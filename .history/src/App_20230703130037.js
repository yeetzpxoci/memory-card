import React, { useState } from 'react';
import "./style.css"

import Header from "./Header"
import CardContainer from "./CardContainer";

function App() {
  const[cards, setCards] = useState(['Isaac', 'Magdalene', 'Cain', 'Judas', '???', 
                                    'Eve', 'Samson', 'Azazel', 'Lazarus', 'Eden', 'The Lost', 'Lilith']);

  return (
    <div>
      <Header></Header>
      <CardContainer cards={cards}>
        
      </CardContainer>
    </div>
  );
}

export default App;
