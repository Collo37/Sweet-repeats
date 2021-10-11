import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "../css/Cart.module.css";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const history = useHistory();

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
      {products.length === 0 ? (
        <div className={classes.emptyCart}>
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <>
          {" "}
          <div className={classes.cartItems}>
            {products.map((product, index) => {
              return <CartItem key={index} itemDetails={product} />;
            })}
          </div>
          <div className={classes.orderSummary}>
            <h3>Order Summary</h3>
            {products.map((product, index) => {
              return (
                <div className={classes.orderSummaryItem} key={index}>
                  <p>Product: {product.productTitle}</p>
                  <p>Quantity: {product.orders}</p>
                  <p>Price: {product.price}</p>
                </div>
              );
            })}
            <p className={classes.total}>Total: {total}</p>
            <div className={classes.checkOut}>
              <button>Continue to Checkout?</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
