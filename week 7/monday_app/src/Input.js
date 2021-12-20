import "./App.css";
import react from "react";

class Input extends react.Component {
  constructor(props) {
    super(props);
    this.inputRef = react.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} className="input" />;
  }
}
export default Input;
