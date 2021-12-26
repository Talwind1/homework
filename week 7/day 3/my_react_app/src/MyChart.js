import react from "react";
import { chart, registerables } from "chart.js";
class MyChart extends react.Component {
  constructor(props) {
    super(props);
    this.myRef = react.createRef();
  }
  componentDidMount() {
    console.log(this.myRef);
  }

  render() {
    return <canvas ref={this.myRef}>mychart</canvas>;
  }
}

export default MyChart;
