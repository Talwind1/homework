import react from "react";
import data from "./store.js";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail.js";

class Products extends react.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    const createLinks = () => {
      return this.state.data.map((obj, key) => {
        let product = (obj) => {
          return (
            <ProductDetail
              imgURL={obj.imageUrl}
              title={obj.title}
              size={obj.size}
              price={obj.price}
            />
          );
        };

        return (
          <Link
            to={`${this.props.location.pathname}/${product.id}`}
            component={product}
            key={obj.id}
          >
            {obj.title}
          </Link>
        );
      });
    };

    return (
      <div>
        <div className="Products">{createLinks()}</div>
      </div>
    );
  }
}
export default Products;
