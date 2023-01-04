import { createSlice } from "@reduxjs/toolkit";

const sportsSlice = createSlice({
  name: 'sports',
  initialState: {
    data: [],
  },
  reducers: {
    getData(state, action) {
      state.data = action.payload
    },
  },
});

export const sportsSliceActions = sportsSlice.actions;

export default sportsSlice;