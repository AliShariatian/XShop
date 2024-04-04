import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";

const store = configureStore({
   reducer: cartReducer,
});


export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export default store;
