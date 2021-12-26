import "./App.css";
import react, { useState } from "react";

function App() {
  const [timeData, setTimeData] = useState({ sec: "", min: "", hour: "" });
  const renderData = (e) => {
    const name = e.target.name;
    // switch (name) {
    //   case "sec":
    const newTime = {
      sec: timeData.sec,
      min: timeData.sec / 60,
      hour: timeData.sec / 360,
    };
    setTimeData(newTime);
    // break;
    // case 'min'
    // ////
    // break;
    // case 'hour'
    // ////
    // break;
  };

  return (
    <div className="App">
      {/* style={{ display: "flex", flexDirection: "row" } */}
      <span>Seconds</span>
      <input
        type="text"
        //  value={timeData.sec}
        name="sec"
        onChange={renderData}
      ></input>
      <span>Minutes</span>
      <input
        type="text"
        //      value={timeData.min}
        name="min"
        onChange={renderData}
      ></input>
      <span>Hours</span>
      <input
        type="text"
        //  value={timeData.hour}
        name="hour"
        onChange={renderData}
      ></input>
    </div>
  );
}

export default App;
