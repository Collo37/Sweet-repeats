import classes from "../css/Product.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Product = ({ details, clicked }) => {
  return (
    <div className={classes.Product} onClick={clicked}>
      <div
        className={classes.ProductImage}
        style={{ backgroundImage: `url(${details.productImages[0]})` }}
      >
        <FavoriteBorderIcon
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            color: "#fb8500",
            cursor: "pointer",
          }}
        />
      </div>
      <div className={classes.ProductDescription}>
        <p className={classes.details}>{details.productTitle}</p>
        <p className={classes.price}>{details.price}</p>
      </div>
    </div>
  );
};

export default Product;
