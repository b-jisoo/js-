import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { clearCart, getTotals } from "../../redux/cartSlice";
import { CartPage, Product } from "../../type";
import CartItem from "./items";

const Cart = () => {
  console.log("장바구니페이지입니다.");
  const cartData = useSelector((state: RootState) => state.cart);
  //const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(cartData));
  }, [cartData]);

  const handleClearCart = () => {
    dispatch(clearCart(cartData));
  };

  return (
    <div>
      장바구니 페이지입니다 {cartData.cartTotalQuantity}개의 상품이 담겼습니다.
      {cartData.cartItems.length === 0 ? (
        <div>
          <p>담긴 상품이 없습니다.</p>
        </div>
      ) : (
        <div>
          {cartData.cartItems?.map((cartItem) => (
            <CartItem {...cartItem} key={cartItem.id} />
          ))}
          <div>
            <button onClick={() => handleClearCart()}>Clear Cart</button>
            <div>
              <span>subtotal</span>
              <span>${cartData.cartTotalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
