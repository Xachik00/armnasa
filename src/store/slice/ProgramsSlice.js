import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Programs: []
}

export const ProgramsSlice = createSlice({
  name: 'Programs',
  initialState,
  reducers: {
    fetchingPrograms(state) {
      state.loading = true;
    },
    fetchPrograms(state, action) {
      state.loading = false;
      state.Programs = action.payload;
      state.error = '';
    },
    fetchErrorPrograms(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingPrograms, fetchPrograms, fetchErrorPrograms } = ProgramsSlice.actions;
export default ProgramsSlice.reducer;