// import { createBrowserRouter } from "react-router-dom";
// import App from "../../App";
// import HomePage from "../pages/public/HomePage";
// import Catalog from "../pages/public/CatalogPage";
// import ProductDetail from "../pages/public/ProductDetail";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <HomePage /> },
//       { path: "/catalog", element: <Catalog /> },
//       { path: "/catalog/:id", element: <ProductDetail /> },
//       // { path: "catalog/:id", element: <ProductDetails /> },
//       // { path: "about", element: <AboutPage /> },
//       // { path: "contact", element: <ContactPage /> },
//       // { path: "cart", element: <CartPage /> },
//       // { path: "contact", element: <ContactPage /> },
//       // { path: "server-error", element: <ServerError /> },
//       // { path: "not-found", element: <NotFound /> },
//       // { path: "*", element: <Navigate replace to="/not-found" /> },
//     ],
//   },
// ]);

export const PATH_PUBLIC = {
  home: "/",
  register: "/register",
  login: "/login",
  unauthorized: "/unauthorized",
  notFound: "/404",
  catalog: "/catalog",
  about: "/about",
  productDetail: "/catalog/:id",
  cart: "/cart",
  checkout: "/checkout",
  thankyou: "/thankyou",
  contact: "/contact",
};

export const PATH_DASHBOARD = {
  dashboard: "/dashboard",
  usersManagement: "/dashboard/users-management",
  updateRole: "/dashboard/update-role/:userName",
  sendMessage: "/dashboard/send-message",
  inbox: "/dashboard/inbox",
  allMessages: "/dashboard/all-messages",
  systemLogs: "/dashboard/system-logs",
  myLogs: "/dashboard/my-logs",
  owner: "/dashboard/owner",
  admin: "/dashboard/admin",
  manager: "/dashboard/manager",
  user: "/dashboard/user",
};
