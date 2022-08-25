import { createSlice } from "@reduxjs/toolkit";
import { CartPage, Product } from "../type";

const initialState: CartPage = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //장바구니에 상품이 있는지 확인
      const itemIndex = state.cartItems.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      // 장바구니에 같은 상품이 있다면 quantity를 1 증가
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        // 장바구니에 같은 상품이 없다면 cartItem에 상품 추가
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    reamoveFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: Product) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice;
export const {
  addToCart,
  reamoveFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;
