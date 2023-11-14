import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import Catalog from "../pages/Catalog";
import ProductDetail from "../pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetail /> },
      // { path: "catalog/:id", element: <ProductDetails /> },
      // { path: "about", element: <AboutPage /> },
      // { path: "contact", element: <ContactPage /> },
      // { path: "cart", element: <CartPage /> },
      // { path: "contact", element: <ContactPage /> },
      // { path: "server-error", element: <ServerError /> },
      // { path: "not-found", element: <NotFound /> },
      // { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
