import "./App.css";
import React from "react";
import axios from "axios";
// import DogCard from "./DogCard";

class App extends React.Component {
  state = {
    data: null,
    error: "",
    isLoading: false,
  };

  randomJoke = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");

    this.setState({ data: data.value, isLoading: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.randomJoke}>generate joke</button>
        {this.state.isLoading ? (
          <h2> Loading...</h2>
        ) : (
          <h2>{this.state.data}</h2>
        )}
      </div>
    );
  }
}
export default App;
