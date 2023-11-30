import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './slice/HomeSlice/HomeSlice'
const store = configureStore({
  reducer: {
    // Header:HeaderReducer,
    // Wish:WishReducer,
    // OneWish:OneWishReducer,
    // InActive:InActiveReducer,
    // Active:ActiveReducer,
    // Benevolent:BenevolentReducer,
    // changeState:changeState,
    // Activity:ActivityReducer,
  }
})

export {store};
