import { useRoutes } from "react-router";
import Gnb from "../src/components/gnb";
import { routes } from "./router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyle from "./GlobalStyle";

const app = () => {
  const elem = useRoutes(routes);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default app;
