import "./App.css";
import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0, color: "" };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  chooseColor = () => {
    if (this.state.counter > 0) {
      return "green";
    } else if (this.state.counter < 0) {
      return "red";
    } else {
      return "black";
    }
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.increase}>increase</button>
        <h1 className={this.chooseColor()}>{this.state.counter}</h1>
        <button onClick={this.decrease}>decrease</button>
      </div>
    );
  }
}

export default App;
