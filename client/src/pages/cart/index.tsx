import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { clearCart } from "../../redux/cartSlice";
import { CartPage, Product } from "../../type";
import CartItem from "./items";

const Cart = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(null));
  };

  return (
    <div>
      장바구니 페이지입니다
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
              <span>${cartData.cartTotalAmount}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
