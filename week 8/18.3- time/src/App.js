import "./App.css";
import react, { useState } from "react";

function App() {
  const [hour, setHour] = useState(0);

  const [min, setMin] = useState(0);

  const [sec, setSec] = useState(0);

  const handleTime = (name, value) => {
    // switch (name) {
    if (name === "sec") {
      setSec(value);
      setMin(value / 60);
      setHour(value / 3600);
    } else if (name === "min") {
      setSec(value * 60);
      setMin(value);
      setHour(value / 60);
    } else {
      setSec(value * 3600);
      setMin(value * 60);
      setHour(value);
    }
  };

  return (
    <div className="App">
      {/* style={{ display: "flex", flexDirection: "row" } */}
      <span>Seconds</span>
      <input
        type="text"
        value={sec}
        name="sec"
        onChange={(e) => handleTime(e.target.name, e.target.value)}
      ></input>
      <span>Minutes</span>
      <input
        type="text"
        value={min}
        name="min"
        onChange={(e) => handleTime(e.target.name, e.target.value)}
      ></input>
      <span>Hours</span>
      <input
        type="text"
        value={hour}
        name="hour"
        onChange={(e) => handleTime(e.target.name, e.target.value)}
      ></input>
    </div>
  );
}

export default App;
