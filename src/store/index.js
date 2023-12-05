import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './slice/HomeSlice';
import AboutReducer from './slice/AboutSlice';
import ProgramsReducer from './slice/ProgramsSlice';
import AmadeReducer from './slice/AmadeSlice';
const store = configureStore({
  reducer: {
    About:AboutReducer,
    Home:HomeReducer,
    Programs:ProgramsReducer,
    Amade:AmadeReducer,
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
