import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// GLOBAL Store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
