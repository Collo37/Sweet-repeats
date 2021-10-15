import { useDispatch } from "react-redux";
import { addToFavorites } from "../state/favoritesSlice";
import classes from "../css/Product.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Product = ({ details, clicked }) => {
  const dispatch = useDispatch();
  const favoritesClickedHandler = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      dispatch(addToFavorites({ itemId: details._id }));
      alert(`${details.productTitle} has been added to favorites`);
    } else {
      alert("You are not logged in");
    }
  };
  return (
    <div className={classes.Product}>
      <div className={classes.ProductImage}>
        <img
          src={details.productImages[0]}
          alt={details.productTitle}
          onClick={clicked}
        />
        <FavoriteBorderIcon
          onClick={favoritesClickedHandler}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            color: "#fb8500",
            cursor: "pointer",
          }}
        />
      </div>
      <div className={classes.ProductDescription} onClick={clicked}>
        <p className={classes.details}>{details.productTitle}</p>
        <p className={classes.price}>{details.price}</p>
      </div>
    </div>
  );
};

export default Product;
