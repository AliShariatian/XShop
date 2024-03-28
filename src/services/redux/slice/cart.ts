import { createSlice } from "@reduxjs/toolkit";
import { cartItemType } from "@/types/cart";

const cartInitialState: cartItemType[] | null = [];

// Todo Slice
const slice = createSlice({
   name: "Cart",
   initialState: {
      cart: cartInitialState,
   },
   reducers: {
      addToCartAction: (state, action) => {
         const itemInCart = state.cart.find((item) => item.id === action.payload.id);
         // BUG: fix separate color or size added to cart.
         if (itemInCart) {
            itemInCart.quantity++;
         } else {
            state.cart.push({ ...action.payload, quantity: 1 });
         }
      },
      incrementQuantityAction: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload)!;
         item.quantity++;
      },
      decrementQuantityAction: (state, action) => {
         const item = state.cart.find((item) => item.id === action.payload)!;
         item?.quantity === 1 ? (item.quantity = 1) : item.quantity--;
      },

      removeFromCartAction: (state, action) => {
         const removeItem = state.cart.filter((item) => item.id !== action.payload);
         state.cart = removeItem;
      },
   },
});

export const { addToCartAction, incrementQuantityAction, decrementQuantityAction, removeFromCartAction } = slice.actions;
export default slice.reducer;
