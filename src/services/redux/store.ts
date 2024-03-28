import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";

const store = configureStore({
   reducer: cartReducer,
});

export default store;
