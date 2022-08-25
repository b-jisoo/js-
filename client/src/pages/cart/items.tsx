import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux";
import {
  addToCart,
  decreaseCart,
  reamoveFromCart,
} from "../../redux/cartSlice";
import { Product } from "../../type";

const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const CartItemButton = styled.button``;

const CartItemImage_Container = styled.div`
  margin-right: 20px;
  max-width: 50px;
`;

const CartItemImage = styled.img`
  width: 100%;
  height: 70px;
  object-fit: contain;
`;

const CartItem = (cartItem: Product) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem: Product) => {
    dispatch(reamoveFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem: Product) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem: Product) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <CartItemContainer>
      <CartItemImage_Container>
        <CartItemImage src={cartItem.image} />
      </CartItemImage_Container>
      <p>id: {cartItem.id}</p>
      <p>상품명: {cartItem.title}</p>
      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
      <p>가격: ${cartItem.price}</p>
      <CartItemButton onClick={() => handleDecreaseCart(cartItem)}>
        -
      </CartItemButton>
      <div>수량: {cartItem.quantity}</div>
      <CartItemButton onClick={() => handleIncreaseCart(cartItem)}>
        +
      </CartItemButton>
      <div>총가격: ${(cartItem.price * cartItem.quantity).toFixed(2)}</div>
    </CartItemContainer>
  );
};

export default CartItem;
