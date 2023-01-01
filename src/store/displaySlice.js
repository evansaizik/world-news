import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayIndex: 0,
  data:[],
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    getData(state, action) {
      state.data = action.payload
    },
    next(state) {
      if (state.displayIndex === (state.data.length - 1)) {
        state.displayIndex = 0;
        return;
      } 
      state.displayIndex++;
    },
    prev(state) {
      if (state.displayIndex === 0) {
        state.displayIndex = (state.data.length - 1);
        return;
      } 
      state.displayIndex--;
    },
  },
});

export const displayActions = displaySlice.actions;

export default displaySlice;