import { useRoutes } from "react-router";
import Gnb from "./component/gnb";
import { routes } from "./router";

const app = () => {
  const elem = useRoutes(routes);
  return (
    <div>
      <Gnb />
      {elem}
    </div>
  );
};

export default app;
