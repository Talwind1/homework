import react from "react";
import React from "react";
import Avatar from "./Avatar";

class AvatarList extends react.Component {
  state = { avatars: this.props.avatars };

  componentDidUpdate(prevProps) {
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        avatars: this.filterData(this.props.avatars, this.props.userValue),
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  mapping = () => {
    return this.state.avatars.map((e) => {
      return <Avatar key={e.id} name={e.name} img={e.imgUrl} />;
    });
  };
  render() {
    return <div>{mapping()}</div>;
  }
}

export default AvatarList;
