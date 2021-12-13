import React from "react";
import "./App.css";
import Card from "./components/Card";
import pic1 from "./pics/1.jpg";
import pic2 from "./pics/2.jpg";
import pic3 from "./pics/3.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card details=" out" link="http://www.google.com" pic={pic1} />
        <Card details="and" link="http://www.google.com" pic={pic2} />
        <Card
          details=" about"
          link="https://www.naotfarm.co.il/en/about-us/"
          pic={pic3}
        />
      </div>
    );
  }
}
export default App;
