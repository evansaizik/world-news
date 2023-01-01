import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers:{
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const statusSliceActions = statusSlice.actions;

export default statusSlice;