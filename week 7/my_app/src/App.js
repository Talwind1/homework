import "./App.css";
import React, { Component } from "react";
import BrowserRouter as Router from 'react-router-dom'
import Input from "./Input";

export default class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Input />
      </div>
    );
  }
}
