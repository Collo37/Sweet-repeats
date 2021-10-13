import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../components/axios";
import classes from "../css/FavoritesPage.module.css";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router";

const FavoritesPage = () => {
  const favoriteIds = useSelector((state) => state.favorites.favoriteProducts);
  const [products, setProducts] = useState([]);
  const history = useHistory();

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
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.title}>Favorites</div>
      <div className={classes.favoritesContainer}>
        {products.map((product) => {
          return (
            <div
              className={classes.favoriteItem}
              onClick={() => history.push(`/product/${product._id}`)}
              key={product._id}
            >
              <div className={classes.favoriteItemImage}>
                <img
                  src={product.productImages[0]}
                  alt={product.productTitle}
                />
              </div>
              <div className={classes.favoriteItemDescription}>
                <p>{product.productTitle}</p>
                <p>{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
