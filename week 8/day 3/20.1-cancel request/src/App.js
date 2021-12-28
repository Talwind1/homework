import "./App.css";
import Fetch from "./Fetch";
import react, { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>toggle</button>
      {display && <Fetch />}
    </div>
  );
}

export default App;
