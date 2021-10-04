import { ShoppingBasketOutlined } from "@mui/icons-material";
import classes from "../css/ProductItemPage.module.css";
import { products } from "../data/products";
import Navbar from "../components/Navbar";

const ProductItemPage = () => {
  const productDetails = products[0].items[1];

  const buttonClickedHandler = (event) => {
    const button = event.target;
    button.style.backgroundColor = "#fb8500";
  };
  const sizeButtons = productDetails.sizes.map((size) => {
    return (
      <button key={size} onClick={(event) => buttonClickedHandler(event)}>
        {size}
      </button>
    );
  });
  return (
    <div className={classes.Container}>
      <Navbar />
      <div className={classes.productImageAndSizesContainer}>
        <div className={classes.sizes}>{sizeButtons}</div>
        <div className={classes.imageContainer}>
          <img src={productDetails.image} alt="denim jumpsuit" />
        </div>
      </div>
      <div className={classes.productDetails}>
        <p>
          <select>
            <option>Color</option>{" "}
            {productDetails.colors.map((color) => {
              return <option key={color}>{color}</option>;
            })}
          </select>
          {productDetails.description}
        </p>
        <div
          style={{
            width: "30%",
            height: "90%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button className={classes.CartButton}>
            <ShoppingBasketOutlined />
            Add to cart
          </button>
          <p className={classes.price}>{productDetails.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
