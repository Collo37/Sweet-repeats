import { useHistory } from "react-router-dom";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import classes from "../css/ProductsContainer.module.css";
import Product from "./Product";
import { products } from "../data/products";

const ProductsContainer = () => {
  const history = useHistory();
  const productClickedHandler = () => {
    history.push("/products");
  };
  return (
    <div className={classes.ProductsContainer}>
      {products.map((product) => {
        return (
          <div className={classes.ProductRow} key={product.title}>
            <div
              className={classes.ProductsLink}
              onClick={productClickedHandler}
            >
              <h2 style={{ color: "gray" }}>{product.title}</h2>
              <p>
                see more <ChevronRightOutlinedIcon />
              </p>
            </div>
            <div className={classes.ProductItems}>
              <Product details={product.items} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsContainer;
