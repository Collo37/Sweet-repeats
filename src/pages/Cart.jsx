import { useHistory } from "react-router-dom";
import classes from "../css/Cart.module.css";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { products } from "../data/products";

const Cart = () => {
  const history = useHistory();
  const cartProduct = products[0].items[1];
  const continueShoppingHandler = () => {
    history.push("/");
  };
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.title}>
        <h1>Cart</h1>
        <button onClick={continueShoppingHandler}>Continue Shopping</button>
      </div>
      <div className={classes.cartItems}>
        <CartItem itemDetails={cartProduct} />
        <CartItem itemDetails={cartProduct} />
      </div>
      <div className={classes.checkOut}>
        <button>Continue to Checkout?</button>
      </div>
    </div>
  );
};

export default Cart;
