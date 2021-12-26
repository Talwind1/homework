import "./App.css";
import react, { useState } from "react";

function App() {
  const dataObj = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ];
  const [data, setData] = useState(dataObj);

  const handleStatus = (index) => {
    const newData = [...data];
    newData[index].completed = !data[index].completed;
    setData(newData);
  };

  const checkStatus = (isCompleted) => {
    let icon = isCompleted ? "✅" : "🟩";
    let style = isCompleted
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    return { icon, style };
  };

  const renderList = () => {
    return data.map((item, index) => {
      return (
        <div key="title">
          <span
            onClick={() => {
              handleStatus(index);
            }}
          >
            {checkStatus(item.completed).icon}
          </span>

          <h2 style={checkStatus(item.completed).style}>{item.name}</h2>
        </div>
      );
    });
  };

  return <div className="App">{renderList()}</div>;
}

export default App;
