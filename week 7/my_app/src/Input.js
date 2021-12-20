import "./App.css";
import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.focus);
  }

  render() {
    return (
      <div className="Input">
        <Input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
