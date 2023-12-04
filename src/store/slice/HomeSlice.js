import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Home: []
}

export const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    fetchingHome(state) {
      state.loading = true;
    },
    fetchHome(state, action) {
      state.loading = false;
      state.Home = action.payload;
      state.error = '';
    },
    fetchErrorHome(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingHome, fetchHome, fetchErrorHome } = HomeSlice.actions;
export default HomeSlice.reducer;