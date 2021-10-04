import { useHistory } from "react-router";
import classes from "../css/ProductItem.module.css";

const ProductItem = ({ item }) => {
  const history = useHistory();
  const productClickedHandler = () => {
    history.push("/products/productId");
  };
  return (
    <div className={classes.ProductItem} onClick={productClickedHandler}>
      <img className={classes.ProductImage} src={item.image} alt={item.name} />
      <div className={classes.ProductDescription}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
