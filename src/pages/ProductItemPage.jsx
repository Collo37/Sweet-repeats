import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../components/axios";
import { useParams } from "react-router-dom";
import { ShoppingBasketOutlined } from "@mui/icons-material";
import classes from "../css/ProductItemPage.module.css";
import Navbar from "../components/Navbar";
import { addProduct } from "../state/cartSlice";
import Spinner from "../components/Spinner";

const ProductItemPage = () => {
  const item = useParams();
  const dispatch = useDispatch();
  const [productItem, setProductItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProductItem = async () => {
      const fetchedItem = await publicRequest.get(`/products/${item.id}`, {
        headers: { id: item.id },
      });
      setProductItem(fetchedItem.data);
      setLoading(false);
    };
    getProductItem();
  }, [item]);
  const buttonClickedHandler = (event) => {
    const button = event.target;
    button.style.backgroundColor = "#fb8500";
  };

  const addToCart = async () => {
    dispatch(
      addProduct({
        product: { ...productItem, orders: 1 },
        itemId: productItem._id,
        quantity: 1,
      })
    );
  };

  let productPageInfo;
  productPageInfo = !loading ? (
    <>
      {" "}
      <div className={classes.productImageAndSizesContainer}>
        <div className={classes.sizes}>
          <button onClick={(event) => buttonClickedHandler(event)}>
            {productItem.size}
          </button>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={productItem.productImages[0]}
            alt={productItem.productTitle}
          />
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
            {productItem.productTitle}
          </span>
          <select>
            <option>Color</option>{" "}
            {productItem.colors.map((color) => {
              return <option key={color}>{color}</option>;
            })}
          </select>
          {productItem.productDescription}
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
          <button className={classes.CartButton} onClick={() => addToCart()}>
            <ShoppingBasketOutlined />
            Add to cart
          </button>
          <p className={classes.price}>{productItem.price}</p>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
  return (
    <div className={classes.Container}>
      <Navbar />
      {productPageInfo}
    </div>
  );
};

export default ProductItemPage;
