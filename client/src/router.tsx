import GlobalLayout from "./pages/_layout";
import Index from "./pages/index";
import CartIndex from "./pages/cart/index";
import ProductsIndex from "./pages/products/index";
import Id from "./pages/products/[id]";
import Login from "./pages/login";
import Signup from "./pages/login/signup";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Index />, index: true },
      { path: "/cart", element: <CartIndex />, index: true },
      { path: "/products", element: <ProductsIndex />, index: true },
      { path: "/products/:id", element: <Id /> },
      { path: "/login", element: <Login />, index: true },
      { path: "/signup", element: <Signup />, index: true },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/products" },
  { route: "/products/:id" },
  { route: "/login" },
  { route: "/signup" },
];
