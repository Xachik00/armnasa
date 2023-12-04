import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Amade: []
}

export const AmadeSlice = createSlice({
  name: 'Amade',
  initialState,
  reducers: {
    fetchingAmade(state) {
      state.loading = true;
    },
    fetchAmade(state, action) {
      state.loading = false;
      state.Amade = action.payload;
      state.error = '';
    },
    fetchErrorAmade(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingAmade, fetchAmade, fetchErrorAmade } = AmadeSlice.actions;
export default AmadeSlice.reducer;