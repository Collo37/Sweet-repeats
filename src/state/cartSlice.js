import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload.itemId
      );
      const item = state.products[itemIndex];
      if (!item) {
        state.quantity += 1;
        state.products.push(action.payload.product);
        state.total += action.payload.product.price;
      } else {
        alert("This item is already in the cart");
      }
    },
    updateProduct: (state, action) => {
      const item = state.products.findIndex(
        (el) => el._id === action.payload.productId
      );
      state.products[item].orders += 1;
      state.total += state.products[item].price;
    },
    reduceProduct: (state, action) => {
      const itemIndex = state.products.findIndex(
        (product) => product._id === action.payload.productId
      );
      const item = state.products[itemIndex];

      item.orders === 0 ? (state.total -= 0) : (state.total -= item.price);
      item.orders === 0 ? (item.orders = 0) : (item.orders -= 1);
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload.productId
      );
      const product = state.products[productIndex];
      state.quantity -= 1;
      state.total -= product.price * product.orders;
      state.products.splice(productIndex, 1);
    },
  },
});

export const { addProduct, updateProduct, reduceProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
