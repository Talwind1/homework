import "./App.css";
import react from "react";
import axios from "axios";

class App extends react.Component {
  state = { data: null, names: [], images: [] };
  fetching = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=10");
    this.setState({ data: data.results });
  };

  getNames = () => {
    const names = [];
    this.state.data.map((avatar) => {
      names.push(`${avatar.name[0]} ${avatar.name[1]}`);
    });
    this.setState({ names });
  };
  getImages = () => {
    const images = [];
    this.state.data.map((avatar) => {
      images.push(avatar.picture);
    });
    this.setState({ images });
  };

  displaying = () => {
    this.state.names.map((name, i) => {
      return (
        <div>
          <h2>{this.state.names[i]}</h2>
          <img src={this.state.images[i]}></img>
        </div>
      );
    });
  };

  render() {
    return <div className="App">{this.displaying()}</div>;
  }
}

export default App;
