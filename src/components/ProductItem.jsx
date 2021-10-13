import { useHistory } from "react-router";

import { FavoriteBorderOutlined } from "@mui/icons-material";
import classes from "../css/ProductItem.module.css";

const ProductItem = ({ item, clicked }) => {
  const history = useHistory();
  const productClickedHandler = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={classes.ProductItem}>
      <img
        className={classes.ProductImage}
        src={item.productImages[0]}
        alt={item.productTitle}
        onClick={() => productClickedHandler(item._id)}
      />
      <div
        className={classes.ProductDescription}
        onClick={() => productClickedHandler(item._id)}
      >
        <p style={{ flex: "2" }}>{item.productTitle}</p>
        <p style={{ flex: "1", textAlign: "right" }}>{item.price}</p>
      </div>
      <FavoriteBorderOutlined
        style={{
          color: "deeppink",
          position: "absolute",
          bottom: "30%",
          right: "1rem",
          cursor: "pointer",
        }}
        onClick={clicked}
      />
    </div>
  );
};

export default ProductItem;
