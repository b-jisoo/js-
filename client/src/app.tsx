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

const app = () => {
  const elem = useRoutes(routes);
  const queryClient = new QueryClient();
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
