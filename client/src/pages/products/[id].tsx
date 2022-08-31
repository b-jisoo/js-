import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router";
import { fetcher, QueryKey } from "../../client";
import ProductDetail from "../../components/product/detail";
import { Product, Products } from "../../type";
const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKey.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );
  if (!data) return null;
  console.log("상세목록페이지입니다.");
  console.log("key", [QueryKey.PRODUCTS, id]);
  console.log("data", data);

  return (
    <div>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};

export default ProductDetailPage;
