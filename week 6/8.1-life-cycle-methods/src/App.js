import React from "react";
import { render } from "react-dom";
import "./App.css";

class App extends React.Component {
  state = {
    favoriteColor: "red",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000);
  }

  componentDidUpdate() {
    document.querySelector(
      "#empty"
    ).innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="empty"></div>
      </div>
    );
  }
}
export default App;
