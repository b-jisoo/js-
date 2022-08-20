import { Product } from "../../type";
import styled from "styled-components";

const Item = styled.li`
  border: 1px solid #000;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

const ProductItem = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <Item>
      <p>{category}</p>
      <p>{title}</p>

      <Image src={image} />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </Item>
  );
};

export default ProductItem;
