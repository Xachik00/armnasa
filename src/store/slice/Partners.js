import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Partners: []
}

export const PartnersSlice = createSlice({
  name: 'Partners',
  initialState,
  reducers: {
    fetchingPartners(state) {
      state.loading = true;
    },
    fetchPartners(state, action) {
      state.loading = false;
      state.Partners = action.payload;
      state.error = '';
    },
    fetchErrorPartners(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingPartners, fetchPartners, fetchErrorPartners } = PartnersSlice.actions;
export default PartnersSlice.reducer;