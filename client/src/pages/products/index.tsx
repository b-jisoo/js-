// const Test_URL = "https://fakestoreapi.com/products";

import { useQuery } from "@tanstack/react-query";
import { fetcher, QueryKey } from "../../client";
import ProductItem from "../../components/product/item";
import { Product } from "../../type";
import styled from "styled-components";

const Products = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ProducList = () => {
  const { data } = useQuery<Product[]>([QueryKey.PRODUCTS], () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);

  return (
    <div>
      상품 목록페이지입니다
      <Products>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </Products>
    </div>
  );
};

export default ProducList;
