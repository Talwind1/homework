import React from "react";
import { render } from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    //this.increase = increase.bind(this);
  }

  increase = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increase}> increament</button>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
