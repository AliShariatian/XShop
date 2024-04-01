"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "@/types/cart";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

const cartInitialState: TCartItem[] | null = getLocalStorage("cart") || [];

// Cart Slice
const slice = createSlice({
   name: "Cart",
   initialState: {
      cart: cartInitialState,
   },
   reducers: {
      addToCartAction: (state, action: PayloadAction<TCartItem>) => {
         const itemInCart = state.cart.find((item) => item.id === action.payload.id);
         if (itemInCart) {
            itemInCart.quantity++;
         } else {
            state.cart?.push({ ...action.payload, quantity: 1 });
         }

         // Set to localStorage
         setLocalStorage("cart", state.cart);
      },

      incrementQuantityAction: (state, action: PayloadAction<number>) => {
         const item = state.cart.find((item) => item.id === action.payload) as TCartItem;
         item.quantity++;

         // Update localStorage
         setLocalStorage("cart", state.cart);
      },

      decrementQuantityAction: (state, action: PayloadAction<number>) => {
         const item = state.cart.find((item) => item.id === action.payload) as TCartItem;
         item.quantity === 1 ? (item.quantity = 1) : item.quantity--;

         // Update localStorage
         setLocalStorage("cart", state.cart);
      },

      removeFromCartAction: (state, action: PayloadAction<number>) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload);
         state.cart = removeItem;

         // Remove from localStorage
         setLocalStorage("cart", state.cart);
      },
   },
});

export const { addToCartAction, incrementQuantityAction, decrementQuantityAction, removeFromCartAction } = slice.actions;
export default slice.reducer;
