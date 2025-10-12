import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => idToRemove !== item.id);
    },
    increaseQuantity: (state, action) => {
      const idToIncrease = action.payload;
      const foundId = state.items.find((item) => item.id === idToIncrease);
      if (foundId) {
        foundId.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const idToDecrease = action.payload;
      const item = state.items.find((item) => item.id === idToDecrease);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== idToDecrease);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
