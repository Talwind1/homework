import "./App.css";
import React from "react";
import Spinner from "./Spinner/Spinner";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { show: "show" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: "hide" });
    }, 3000);
  }
  // componentDidUpdate() {
  //   setTimeout(() => {}, 3000);
  // }

  render() {
    return (
      <div className={this.state.show}>
        <Spinner />;
      </div>
    );
  }
}

export default App;
