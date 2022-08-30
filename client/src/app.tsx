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
import { Provider } from "react-redux";
import { store } from "./redux/index";
import getClient from "./client";

const app = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <Gnb />
        {elem}
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default app;
