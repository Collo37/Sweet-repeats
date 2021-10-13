import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteProducts: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      !state.favoriteProducts.includes(action.payload.itemId) &&
        state.favoriteProducts.push(action.payload.itemId);
    },
    removeFromFavorites: (state, action) => {
      const item = state.favoriteProducts.indexOf(action.payload.itemId);
      state.favoriteProducts.splice(state.favoriteProducts[item], 1);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
