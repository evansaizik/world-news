import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import displaySlice from "./displaySlice";
import statusSlice from "./status";
const initialState = {
  data: [],
  currentPage: 1,
  pagelength: 0,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    getData(state, action) {
      const data = action.payload;
      state.data = data;
      state.pagelength = Math.ceil(data.length / 5);

      //number of pages to be displayed 
      state.pages = data.slice((state.currentPage - 1) * 5 , state.currentPage * 5)
    },
    nextPage(state) {
      if (state.currentPage === state.pages) {
        return;
      }
      state.currentPage++;
    },
    prevPage(state) {
      if(state.currentPage === 1) {
        return;
      }
      state.currentPage--;
    },
  },
})


const store = configureStore({
  reducer: {
    result: resultSlice.reducer,
    display: displaySlice.reducer,
    status: statusSlice.reducer,

  }
});

export const resultActions = resultSlice.actions;

export default store;