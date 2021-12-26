import react from "react";
import { Link } from "react-router-dom";

class Header extends react.Component {
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <Link to="/products">products</Link>
        <Link to="/">Homepage</Link>
      </div>
    );
  }
}
export default Header;
