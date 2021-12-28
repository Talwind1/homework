import "./App.css";
import react, { useState, useEffect, useRef } from "react";
import santa from "./santa.png";
import shrimp from "./shrimp.jpg";

function App() {
  const santaRef = useRef();

  const shrimpRef = useRef();

  const [santaStyle, setSantaStyle] = useState({ filter: "grayscale(100%)" });
  const [shrimpStyle, setShrimpStyle] = useState({ filter: "grayscale(100%)" });

  const handleOver = (refItem) => {
    if (refItem === "santaRef") {
      setSantaStyle;
    }
    refItem.current.style.filter = "grayscale(100%)";
  };
  const handleLeave = (refItem) => {
    refItem.current.style.filter = "grayscale(0%)";
  };
  return (
    <div className="App">
      <img
        src={santa}
        alt="santa"
        ref={santaRef}
        onMouseOver={() => handleOver(santaRef)}
        onMouseLeave={() => handleLeave(santaRef)}
      />
      <img
        src={shrimp}
        alt="shrimp"
        ref={shrimpRef}
        onMouseOver={() => handleOver(shrimpRef)}
        onMouseLeave={() => handleLeave(shrimpRef)}
      />
    </div>
  );
}

export default App;
