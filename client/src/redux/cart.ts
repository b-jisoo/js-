import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Product } from "../type";

const initialState: {
  cartItems: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
} = {
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
        (item: any) => item.id === action.payload.id
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
    minus: (state, action) => {},
  },
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart } = cartSlice.actions;
export default store;