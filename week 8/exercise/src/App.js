import "./App.css";
import react, { useState } from "react";

function App() {
  const [hour, setHour] = useState(0);

  const [min, setMin] = useState(0);

  const [sec, setSec] = useState(0);

  const setTime = () => {
    console.log(e);
  };

  return (
    <div className="App">
      {/* style={{ display: "flex", flexDirection: "row" } */}
      <span>Seconds</span>
      <input
        type="text"
        //  value={timeData.sec}
        name="sec"
        onChange={setTime}
      ></input>
      <span>Minutes</span>
      <input
        type="text"
        //      value={timeData.min}
        name="min"
        onChange={setTime}
      ></input>
      <span>Hours</span>
      <input
        type="text"
        //  value={timeData.hour}
        name="hour"
        onChange={setTime}
      ></input>
    </div>
  );
}

export default App;
