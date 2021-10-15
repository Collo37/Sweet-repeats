import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../components/axios";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import ProductItem from "../components/ProductItem";
import classes from "../css/ProductPage.module.css";
import LoginPrompt from "../components/LoginPrompt";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../state/favoritesSlice";
import Spinner from "../components/Spinner";

const ProductPage = () => {
  const category = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const categoryProducts = await publicRequest.get(
        `/products/?category=${category.category}`
      );
      setProducts(categoryProducts.data);
      setLoading(false);
    };
    getProducts();
  }, [category]);
  const categoryName = category.category;
  const favoritesClickedHandler = (itemName, id) => {
    if (localStorage.getItem("Token")) {
      dispatch(addToFavorites({ itemId: id }));
      alert(`${itemName} has been added to favorites`);
    } else {
      setPrompt(true);
    }
  };
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState(false);
  return (
    <div className={classes.Container}>
      <Navbar />

      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.ProductsContainer}>
          {prompt ? <LoginPrompt /> : null}
          {prompt ? <Modal clicked={() => setPrompt(false)} /> : null}
          <p>{categoryName}</p>
          {products.map((product) => {
            return (
              <ProductItem
                key={`product_${product.productTitle}`}
                item={product}
                clicked={() =>
                  favoritesClickedHandler(product.productTitle, product._id)
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
