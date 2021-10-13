import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
