import "./App.css";
import react, { Component } from "react";
import axios from "axios";
import AvatarList from "./components/AvatarList";
import Input from "./components/Input";

export default class App extends Component {
  state = { data: [], value: "" };
  async componentDidMount() {
    //spinner on
    await this.fetching();
    //spinner off
  }

  fetching = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=10");
    const dataLite = data.results.map((e) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        imgUrl: e.picture.medium,
        id: e.lodin.uuid,
      };
    });
    this.setState({ data: dataLite });
    //    console.log(this.state.data);
  };

  handleInput = ({ target: { value } }) => {
    const tempState = [...this.state.originalData];
    this.setState({
      value: userValue.target.value,
      data: this.filterData(tempState, value),
    });
  };

  filterData = (arrData, userInput) => {
    return arrData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };
  render() {
    return (
      <div className="App">
        <Input
          onChange={() => {
            this.handleInput;
          }}
          value={this.state.value}
        />
        <AvatarList avatars={this.state.data} />
      </div>
    );
  }
}
