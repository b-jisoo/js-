import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { CartPage } from "../../type";
import CartItem from "./items";

const Cart = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  console.log(cartData);

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
        </div>
      )}
    </div>
  );
};
export default Cart;
