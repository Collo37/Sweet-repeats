import { useHistory } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import classes from "../css/ProductsContainer.module.css";
import Product from "./Product";
import { products } from "../data/products";

const ProductsContainer = () => {
  let newArrivals = [];
  let tops = [];
  products.forEach((product) => {
    if (product.categories.includes("New Arrivals")) {
      newArrivals.push(product);
    }
    if (product.categories.includes("Tops")) {
      tops.push(product);
    }
  });
  const history = useHistory();
  const productClickedHandler = (id) => {
    history.push(`/categories/${id}`);
  };
  const productItemClickedHandler = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className={classes.ProductsContainer}>
      <div className={classes.ProductRow}>
        <div
          className={classes.ProductsLink}
          onClick={() => productClickedHandler("New Arrivals")}
        >
          <h2 style={{ color: "gray" }}>New Arrivals</h2>
          <p>
            see more <ChevronRightOutlinedIcon />
          </p>
        </div>
        <div className={classes.ProductItems}>
          {newArrivals.map((product) => {
            return (
              <Product
                key={`new_arrivals_${product.productTitle}`}
                details={product}
                clicked={() => productItemClickedHandler(product.productTitle)}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.ProductRow}>
        <div
          className={classes.ProductsLink}
          onClick={() => productClickedHandler("Tops")}
        >
          <h2 style={{ color: "gray" }}>Tops</h2>
          <p>
            see more <ChevronRightOutlinedIcon />
          </p>
        </div>
        <div className={classes.ProductItems}>
          {tops.map((product) => {
            return (
              <Product key={`tops_${product.productTitle}`} details={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
