import { createSlice } from "@reduxjs/toolkit";
import { cartItemType } from "@/types/cart";

const initialState: cartItemType[] = [
   {
      id: 0,
      title: "",
      mainImage: "",
      price: 0,
      selectedColor: "",
      selectedSize: "",
      discount: 0,
      slug: "",
      quantity: 0,
   },
];

// Todo Slice
const slice = createSlice({
   name: "Cart",
   initialState: {
      cart: initialState,
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
