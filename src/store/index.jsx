//import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movieSlice";

/**
 * Buat Store
 * menyimpan berbagai slice reducers
 */
const store = configureStore({
    reducer: {
        movies : moviesReducer
    },
});

export default store