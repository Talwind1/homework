import "./App.css";
import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, show: "" };
  }

  showBox = () => {
    this.setState({ clicked: !this.state.clicked });
    if (this.state.clicked) this.setState({ show: "show" });
    else {
      this.setState({ show: "" });
    }
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.showBox}>show/hide</button>
        <div
          className={this.state.show}
          style={{ width: "150px", height: "150px" }}
        ></div>
      </div>
    );
  }
}

export default App;
