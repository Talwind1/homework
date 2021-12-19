import react from "react";
import Name from "./Name";
import Card from "./Card";

class Data extends react.Component {
  state = {
    names: null,
    older: null,
  };
  data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Johnny",
      birthday: "1-10-1992",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];

  getNames = () => {
    let names = [];
    this.data.map((person) => names.push(person.name));
    this.setState({ names });
    return names;
  };

  ninetiz = () => {
    let people = [];
    this.data.map((person) => {
      if (person.birthday.slice(-4) < 1990) {
        people.push(person);
      }
    });
    this.setState({ older: people });
    return people;
  };

  render() {
    return (
      <div>
        <Name name={this.state.names}>{this.state.names}</Name>
        <Card older={this.state.older}>{this.state.older}</Card>
      </div>
    );
  }
}

export default Data;
