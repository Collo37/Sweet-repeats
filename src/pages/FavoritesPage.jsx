import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../components/axios";
import classes from "../css/FavoritesPage.module.css";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router";
import { Delete } from "@mui/icons-material";
import { removeFromFavorites } from "../state/favoritesSlice";

const FavoritesPage = () => {
  const favoriteIds = useSelector((state) => state.favorites.favoriteProducts);
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const getItems = async () => {
      const favoriteItems = await Promise.all(
        favoriteIds.map(async (id) => {
          const item = userRequest.get(`/products/${id}`);
          return (await item).data;
        })
      );
      setProducts(favoriteItems);
    };
    getItems();
  }, [favoriteIds]);
  const favorites = (
    <div className={classes.favoritesContainer}>
      {products.map((product) => {
        return (
          <div className={classes.favoriteItem} key={product._id}>
            <div
              className={classes.favoriteItemImage}
              onClick={() => history.push(`/product/${product._id}`)}
            >
              <img src={product.productImages[0]} alt={product.productTitle} />
            </div>
            <div className={classes.favoriteItemDescription}>
              <p>{product.productTitle}</p>
              <p>{product.price}</p>
              <Delete
                color="action"
                onClick={() =>
                  dispatch(removeFromFavorites({ itemId: product._id }))
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.title}>Favorites</div>
      {products.length > 0 ? (
        favorites
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "50vh",
            padding: "1rem",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          You have not selected any favorite items yet
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
