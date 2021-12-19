import { configureStore } from "@reduxjs/toolkit";
import interiorReducer from './slices/interiorSlice';


export const store = configureStore({
    reducer: {
        books: interiorReducer,
    },
})