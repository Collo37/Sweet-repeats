import { useState } from "react";
import classes from "../css/CartItem.module.css";

const CartItem = ({ itemDetails }) => {
  const [count, setCount] = useState(1);
  const reduceCountHandler = () => {
    count !== 0
      ? setCount(count - 1)
      : alert("This item is no longer in the cart!");
  };
  const increaseCountHandler = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.CartItemImage}>
        <img src={itemDetails.image} alt={itemDetails.name} />
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
          <button onClick={reduceCountHandler}>-</button>
          {count}
          <button onClick={increaseCountHandler}>+</button>
        </div>
        <div className={classes.productDetails}>
          <p>
            Product: <span>{itemDetails.name}</span>
          </p>
          <p>
            Price: <span>{itemDetails.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
