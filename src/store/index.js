import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './slice/HomeSlice';
import AboutReducer from './slice/AboutSlice';
import ProgramsReducer from './slice/ProgramsSlice';
import AmadeReducer from './slice/AmadeSlice';
import PartnersReducer from './slice/Partners';
import LanguageReducer from './slice/LanguageSlice'
import HeaderReducer from './slice/HeaderSlice'

import ContactReducer from "./slice/ContactSlice"
const store = configureStore({
  reducer: {
    About:AboutReducer,
    Home:HomeReducer,
    Programs:ProgramsReducer,
    Amade:AmadeReducer,
    Partners:PartnersReducer,
    Language:LanguageReducer,
    Header:HeaderReducer,
    Contact:ContactReducer,
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
