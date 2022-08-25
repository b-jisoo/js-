import { Product } from "../../type";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import store, { addToCart } from "../../redux/cartSlice";

const Item = styled.li`
  border: 1px solid #000;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const ProductItem = (product: Product) => {
  const dispatch = useDispatch();
  //const navigate = useNavigate(); 담기 버튼 클릭시 장바구니 주소로 이동1 (총 2개 주석처리)

  const handlAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    // navigate("/cart"); 담기 버튼 클릭시 장바구니 주소로 이동2
  };

  return (
    <Item>
      <Link to={`/products/${product.id}`}>
        <p>{product.category}</p>
      </Link>
      <p>{product.title}</p>
      <Image src={product.image} />
      <span>${product.price}</span>
      <button onClick={() => handlAddToCart(product)}>담기</button>
    </Item>
  );
};

export default ProductItem;
