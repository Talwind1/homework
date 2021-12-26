import react from "react";

class HomePage extends react.Component {
  styles = {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  render() {
    return (
      <div style={this.styles}>
        <h1>Home Page</h1>
      </div>
    );
  }
}
export default HomePage;
