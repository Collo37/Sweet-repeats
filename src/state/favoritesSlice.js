import { createSlice } from "@reduxjs/toolkit";
const favoriteIds = localStorage.getItem("Favorites");
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteProducts: favoriteIds ? favoriteIds.split(",") : [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      !state.favoriteProducts.includes(action.payload.itemId) &&
        state.favoriteProducts.push(action.payload.itemId);
      localStorage.setItem("Favorites", state.favoriteProducts);
    },
    removeFromFavorites: (state, action) => {
      const item = state.favoriteProducts.indexOf(action.payload.itemId);
      state.favoriteProducts.splice(state.favoriteProducts[item], 1);
      localStorage.setItem("Favorites", state.favoriteProducts);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
