//import slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utility/constant/Data";

/**
 * buat slice : untuk generate action dan reducer
 * menerima param object : name , initialState, reducers
 */

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    deleteMovie() {},
  },
});

//generate reducers and action
const moviesReducer = moviesSlice.reducer;
// const moviesAction  = moviesSlice.actions;
const { addMovie, deleteMovie } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovie };
