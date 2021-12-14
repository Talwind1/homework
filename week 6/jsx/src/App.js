import "./App.css";
import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: null,
      border: null,
      counter: 0,
    };
    this.colors = ["blue", "red", "green"];
  }
  chooseColor = () => {
    let i = Math.floor(Math.random() * this.colors.length);
    let color = this.colors[i];
    return color;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: this.chooseColor(),
        counter: this.state.counter + 1,
      });
    }, 500);
  }

  componentDidUpdate() {
    if (this.state.counter % 4 === 0) {
      this.setState({
        color: this.chooseColor(),
        counter: this.state.counter + 1,
        border: "makeCircle",
      });
    } else {
      setTimeout(() => {
        this.setState({
          color: this.chooseColor(),
          counter: this.state.counter + 1,
        });
      }, 500);
    }
  }

  render() {
    return (
      <div
        id="box"
        className={`${this.state.color} ${this.state.border}`}
      ></div>
    );
  }
}

export default App;
