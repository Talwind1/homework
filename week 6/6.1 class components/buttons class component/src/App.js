import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button content="Important" />

        <Button content="Not Important" />
      </div>
    );
  }
}

export default App;
