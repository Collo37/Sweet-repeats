import { useParams } from "react-router-dom";
import { ShoppingBasketOutlined } from "@mui/icons-material";
import classes from "../css/ProductItemPage.module.css";
import { products } from "../data/products";
import Navbar from "../components/Navbar";

const ProductItemPage = () => {
  const item = useParams();
  const itemName = item.productId;
  const product = products.find((product) => {
    return product.productTitle === itemName;
  });

  const buttonClickedHandler = (event) => {
    const button = event.target;
    button.style.backgroundColor = "#fb8500";
  };
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.productImageAndSizesContainer}>
        <div className={classes.sizes}>
          <button onClick={(event) => buttonClickedHandler(event)}>
            {product.size}
          </button>
        </div>
        <div className={classes.imageContainer}>
          <img src={product.productImages[0]} alt={product.productTitle} />
        </div>
      </div>
      <div className={classes.productDetails}>
        <p>
          <span
            style={{
              fontSize: "1.2rem",
              color: "orange",
            }}
          >
            {product.productTitle}
          </span>
          <select>
            <option>Color</option>{" "}
            {product.colors.map((color) => {
              return <option key={color}>{color}</option>;
            })}
          </select>
          {product.productDescription}
        </p>
        <div
          style={{
            width: "30%",
            height: "90%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <button className={classes.CartButton}>
            <ShoppingBasketOutlined />
            Add to cart
          </button>
          <p className={classes.price}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
