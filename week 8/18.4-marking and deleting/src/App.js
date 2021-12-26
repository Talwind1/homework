import "./App.css";
import react, { useState } from "react";
import Checkbox from "./Checkbox";

function App() {
  const [data, setData] = useState([
    { name: "one", checked: false },
    { name: "two", checked: false },
    { name: "three", checked: false },
    { name: "four", checked: false },
    { name: "five", checked: false },
  ]);

  const setChecked = (index) => {
    const dataCopy = [...data];
    dataCopy[index].checked = !data[index].checked;
    setData(dataCopy);
  };

  return (
    <div className="App">
      {data.map((item, index) => {
        if (!item.checked) {
          return (
            <li key={item.name}>
              <Checkbox idx={index} checkUpdate={setChecked} />
              {item.name}
            </li>
          );
        }
      })}
      {/* <button onClick={remove}>delete</button> */}

      <button>reset</button>
    </div>
  );
}

export default App;
