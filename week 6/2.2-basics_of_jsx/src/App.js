import "./App.css";
const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";
function App() {
  return (
    <div className="App">
      <div>
        {data[0][0].toUpperCase() +
          data[0].substring(1) +
          " " +
          data[1][0].toUpperCase() +
          data[1].substring(1)}
      </div>
      <div>{number1 + number2}</div>
      <div>The string's length is {string.length}</div>
    </div>
  );
}

export default App;
