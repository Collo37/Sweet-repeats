import classes from "../css/Product.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Product = ({ details }) => {
  const keys = Object.keys(details);
  return keys.map((key) => {
    return (
      <div className={classes.Product} key={key}>
        <div
          className={classes.ProductImage}
          style={{ backgroundImage: `url(${details[key].image})` }}
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
          <p className={classes.details}>{details[key].name}</p>
          <p className={classes.price}>{details[key].price}</p>
        </div>
      </div>
    );
  });
};

export default Product;
