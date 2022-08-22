import { Product } from "../../type";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import store, { addToCart } from "../../redux/cart";

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

  const handlAddToCart = (product: any) => {
    dispatch(addToCart(product));
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
