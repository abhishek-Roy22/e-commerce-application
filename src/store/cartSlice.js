import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((cartItem) => cartItem.id !== itemId);
      }
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== itemId
          );
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
