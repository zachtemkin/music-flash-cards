import React, { useState } from "react";
import "./App.scss";

import FlashCard from "./components/FlashCard";

import D4 from "./images/D4.png";
import E4 from "./images/E4.png";
import F4 from "./images/F4.png";
import G4 from "./images/G4.png";
import A5 from "./images/A5.png";
import B5 from "./images/B5.png";
import C5 from "./images/C5.png";
import D5 from "./images/D5.png";
import E5 from "./images/E5.png";
import F5 from "./images/F5.png";
import G5 from "./images/G5.png";

function App() {
  const notes = {
    0: { name: "D", image: D4 },
    1: { name: "E", image: E4 },
    2: { name: "F", image: F4 },
    3: { name: "G", image: G4 },
    4: { name: "A", image: A5 },
    5: { name: "B", image: B5 },
    6: { name: "C", image: C5 },
    7: { name: "D", image: D5 },
    8: { name: "E", image: E5 },
    9: { name: "F", image: F5 },
    10: { name: "G", image: G5 },
  };

  const [currentObjKey, setCurrentObjKey] = useState(
    Math.floor(Math.random() * 11)
  );

  const updateNote = () => {
    let newKey = Math.floor(Math.random() * 11);

    if (newKey === currentObjKey) {
      newKey = (newKey + 1) % 11;
    }

    setTimeout(() => {
      setCurrentObjKey(newKey);
    }, 100);
  };

  return (
    <div className='App'>
      <FlashCard note={notes[currentObjKey]} />
      <button className='new-card-button' onClick={() => updateNote()}>
        New Note
      </button>
    </div>
  );
}

export default App;
