import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';

const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default cartStore;