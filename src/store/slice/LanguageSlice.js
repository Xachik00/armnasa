import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Language: []
}

export const LanguageSlice = createSlice({
  name: 'Language',
  initialState,
  reducers: {
    fetchingLanguage(state) {
      state.loading = true;
    },
    fetchLanguage(state, action) {
      state.loading = false;
      state.Language = action.payload;
      state.error = '';
    },
    fetchErrorLanguage(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingLanguage, fetchLanguage, fetchErrorLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;