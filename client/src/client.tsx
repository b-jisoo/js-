import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

type AnyOBJ = { [key: string]: any };

const getClient = (() => {
  // 처음 client는 null로 설정한다
  let client: QueryClient | null = null;
  return () => {
    // client가 없으면 캐시 설정한다
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = "https://fakestoreapi.com";

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    // if (params) {
    //   const searchParams = new URLSearchParams(params);
    //   url += "?" + searchParams.toString();
    // }
    // if (body) fetchOptions.body = JSON.stringify(body);

    const res = await fetch(url, fetchOptions);
    const json = res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const QueryKey = {
  PRODUCTS: "PRODUCTS",
};

export default getClient;
