// const Test_URL = "https://fakestoreapi.com/products";

import { useQuery } from "@tanstack/react-query";
import { fetcher, QueryKey } from "../../client";
import ProductItem from "../../components/product/item";
import { Product } from "../../type";

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
      <ul>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProducList;
