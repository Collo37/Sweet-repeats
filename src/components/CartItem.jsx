import { useState } from "react";
import classes from "../css/CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  reduceProduct,
  removeProduct,
  updateProduct,
} from "../state/cartSlice";
import { Delete } from "@mui/icons-material";
import { useHistory } from "react-router";

const CartItem = ({ itemDetails }) => {
  const [count, setCount] = useState(itemDetails.orders);
  const dispatch = useDispatch();
  const history = useHistory();
  const reduceCountHandler = () => {
    count !== 0 ? setCount(itemDetails.orders) : setCount(0);
    dispatch(reduceProduct({ productId: itemDetails._id }));
  };

  const increaseCountHandler = () => {
    setCount(itemDetails.orders);
    dispatch(updateProduct({ productId: itemDetails._id }));
  };

  const removeClickedHandler = (id) => {
    dispatch(removeProduct({ productId: id }));
    setCount(itemDetails.orders);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.CartItemImage}>
        <img
          src={itemDetails.productImages[0]}
          alt={itemDetails.productTitle}
          onClick={() => history.push(`/product/${itemDetails._id}`)}
        />
        <div
          className={classes.delete}
          onClick={() => removeClickedHandler(itemDetails._id)}
        >
          <Delete color="warning" />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          height: "40%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={classes.counter}>
          <button onClick={() => reduceCountHandler()}>-</button>
          {itemDetails.orders}
          <button onClick={increaseCountHandler}>+</button>
        </div>
        <div className={classes.productDetails}>
          <p>
            <span>{itemDetails.productTitle}</span>
          </p>
          <p>
            <span>{itemDetails.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
