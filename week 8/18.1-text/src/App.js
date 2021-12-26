import "./App.css";
import Text from "./Text";

function App() {
  let text = "tushtushtushtushtush ata rach";
  let size = 10;

  return (
    <div className="App">
      <Text text={text} size={size} />
    </div>
  );
}

export default App;
