import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Product } from "../../type";

const CartItem = ({
  category,
  description,
  id,
  image,
  price,
  title,
  quantity,
  amount,
}: Product) => {
  return (
    <div>
      <p>id: {id}</p>
      {/* <img src={image} /> */}
      <p>상품명: {title}</p>
      <p>가격: ${price}</p>
      <p>수량: {quantity}</p>
    </div>
  );
};

export default CartItem;
