import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const numberOfPages = 6;
const pageLength = 5

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: (numberOfPages - 1) * pageLength,
    pageLength: 5,
    numberOfPages: 6
  },
  reducers: {
    nextPage(state) {
      state.currentPage = state.currentPage++;
    },
    prevPage(state) {
      state.currentPage = state.currentPage--;
    }
  },
});

export const getNews = () => {
  const httpRequest = async() => {
    const response = await fetch('https://inshorts.deta.dev/news?category=');
    const {data} = await response.json();

    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    console.log(data);
    console.log(data.length)
  }

  try {
    httpRequest();
  } catch (error) {
    console.log(error)
  }
}

export const paginationActions = paginationSlice.actions;

const store = configureStore({
  reducer: paginationSlice.reducer,
});

export default store;