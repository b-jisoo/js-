import { Product } from "../../type";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.li`
  border: 1px solid #000;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const ProductItem = ({ category, id, image, price, title }: Product) => {
  return (
    <Item>
      <Link to={`/products/${id}`}>
        <p>{category}</p>
      </Link>
      <p>{title}</p>
      <Image src={image} />
      <span>${price}</span>
      <button>담기</button>
    </Item>
  );
};

export default ProductItem;
