import "./App.css";
import react, { useState } from "react";
import Checkbox from "./Checkbox";

function App() {
  const [activeItems, setActiveItems] = useState([
    { name: "one", checked: false },
    { name: "two", checked: false },
    { name: "three", checked: false },
    { name: "four", checked: false },
    { name: "five", checked: false },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const deleteItems = () => {
    setActiveItems(activeItems.filter((item) => !selectedItems.includes(item)));
  };
  const resetItems = () => {
    setSelectedItems = [];
  };
  return (
    <div className="App">
      {activeItems.map((item, index) => {
        return (
          <li key={item.name}>
            <input type="checkbox" isChecked={selectedItems.includes(item)} />
            {item.name}
          </li>
        );
      })}
      <button onClick={deleteItems}>Delete</button>
      <button onClick={resetItems}>Reset</button>
    </div>
  );
}

export default App;
