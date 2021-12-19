import "./App.css";
import react from "react";
import axios from "axios";
import Data from "./Data";
import Name from "./Name";

class App extends react.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Data />
        <Name name={this.state.names}>{this.state.names}</Name>
      </div>
    );
  }
}

export default App;
