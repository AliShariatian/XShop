import { createSlice } from "@reduxjs/toolkit";

// Todo Slice
const slice = createSlice({
   name: "Cart",
   initialState: {
      cart: [],
   },
   reducers: {
      addToCartAction: (state, action) => {
         const itemInCart = state.cart.find((item) => item.id === action.payload.id);
         if (itemInCart) {
            itemInCart.quantity++;
         } else {
            state.cart.push({ ...action.payload, quantity: 1 });
         }
      },
      incrementQuantityAction: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload);
         item.quantity++;
      },
      decrementQuantityAction: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload);
         if (item.quantity === 1) {
            item.quantity = 1;
         } else {
            item.quantity--;
         }
      },

      removeFromCartAction: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload);
         state.cart = removeItem;
      },
   },
});

export const { addToCartAction, incrementQuantityAction, decrementQuantityAction, removeFromCartAction } = slice.actions;
export default slice.reducer;
