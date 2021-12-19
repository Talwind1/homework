import "./App.css";
import react from "react";
import axios from "axios";

class App extends react.Component {
  state = {
    isLoading: false,
    error: "",
    randomJoke: null,
    categories: null,
    inputValue: null,
    list: [],
  };

  generateJoke = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ randomJoke: data.value, isLoading: false });
  };

  categories = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: data, isLoading: false });
  };

  fetchCategory = async (category) => {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    this.setState({ randomJoke: data.value, isLoading: false });
  };

  generateInput = async (e) => {
    this.setState({ isLoading: true });
    let inputValue = e.target.value;
    this.setState({ inputValue });
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${inputValue}`
    );
    let list = [];
    data.result.map((item) => {
      list.push(item.value);
    });
    // console.log(data.result);
    this.setState({ list, isLoading: false });
  };

  render() {
    const generateCategories = () => {
      if (this.state.categories) {
        console.log(this.state.categories);
        return this.state.categories.map((category, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                this.fetchCategory(category);
              }}
            >
              {this.state.categories && category}
            </button>
          );
        });
      }
    };

    return (
      <div className="App">
        <button onClick={this.generateJoke}>generate a joke</button>
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{this.state.randomJoke}</div>
        )}
        <button onClick={this.categories}>categories</button>
        {generateCategories()}

        <input
          onChange={this.generateInput}
          value={this.state.inputValue}
        ></input>
        {this.state.list}
      </div>
    );
  }
}

export default App;
