import { useHistory } from "react-router";
import classes from "../css/ProductItem.module.css";

const ProductItem = ({ item }) => {
  const history = useHistory();
  const productClickedHandler = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div
      className={classes.ProductItem}
      onClick={() => productClickedHandler(item.productTitle)}
    >
      <img
        className={classes.ProductImage}
        src={item.productImages[0]}
        alt={item.productTitle}
      />
      <div className={classes.ProductDescription}>
        <p>{item.productTitle}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
