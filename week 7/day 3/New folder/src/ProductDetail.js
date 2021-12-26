import react from "react";
import data from "./store.js";

class ProductDetail extends react.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  componentDidMount() {
    console.log(this);
    const id = Number(this.props.match.params.id); //********* */
    const findProduct = data.find((item) => {
      return item.id === id;
    });
    if (!findProduct) {
      //if there isn't that product redirect to somewhere else. Better to a component that says component not found
      this.props.history.goBack(); //********* */
    }
    this.setState({ product: findProduct });
  }
  handleClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      this.state.product && (
        <div>
          <h2>{this.this.state.title}</h2>
          <image src={this.state.imgageURL} alt="" />
          <h2>{this.state.price}</h2>
          <h2>{this.state.size}</h2>
          <button onClick={this.state.handleClick}>back</button>
        </div>
      )
    );
  }
}

export default ProductDetail;
