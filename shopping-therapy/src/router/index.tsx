import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/dashboard";
import HomePage from "../pages/public/HomePage";
import RegisterPage from "../pages/public/RegisterPage";
import LoginPage from "../pages/public/LoginPage";
import UnauthorizedPage from "../pages/public/UnauthorizedPage";
import { PATH_DASHBOARD, PATH_PUBLIC } from "./Routes";
import AuthGuard from "../auth/AuthGuard";
import {
  adminAccessRoles,
  allAccessRoles,
  managerAccessRoles,
  ownerAccessRoles,
} from "../auth/auth.utils";
import DashboardPage from "../pages/dashboard/DashboardPage";
import SendMessagePage from "../pages/dashboard/Message/SendMessagePage";
import InboxPage from "../pages/dashboard/Message/InboxPage";
import MyLogsPage from "../pages/dashboard/MyLogsPage";
import UserPage from "../pages/dashboard/User/UserPage";
import ManagerPage from "../pages/dashboard/ManagerPage";
import UsersManagementPage from "../pages/dashboard/UserManagementPage";
import UpdateRolePage from "../pages/dashboard/UpdateRolePage";
import AdminPage from "../pages/dashboard/AdminPage";
import SystemLogsPage from "../pages/dashboard/SystemLogsPage";
import OwnerPage from "../pages/dashboard/OwnerPage";
import NotFoundPage from "../pages/public/NotFoundPage";
import CatalogPage from "../pages/public/CatalogPage";
import AboutPage from "../pages/public/AboutPage";
import ProductDetail from "../pages/public/ProductDetail";
import CartPage from "../pages/public/CartPage";
import CheckoutPage from "../pages/public/CheckoutPage";
import ContactPage from "../pages/public/ContactPage";
import MySendboxPage from "../pages/dashboard/Message/MySendboxPage";
import MessageDetail from "../pages/dashboard/Message/MessageDetail";
import Order from "../pages/dashboard/Order/Order";
import OrderDetail from "../pages/dashboard/Order/OrderDetail";
import ThankYouPage from "../pages/public/ThankYouPage";
import ProductManagement from "../pages/dashboard/Product/ProductManagement";
import AddProduct from "../pages/dashboard/Product/AddProduct";
import CargoManagement from "../pages/dashboard/Cargo/CargoManagement";
import UpdateCargoStatusPage from "../pages/dashboard/Cargo/UpdateCargoStatusPage";
import UpdateMyProfilePage from "../pages/dashboard/User/UpdateMyProfilePage";
import AddUser from "../pages/dashboard/User/AddUser";
import CategoryManagement from "../pages/dashboard/Category/CategoryManagement";
import AddCategory from "../pages/dashboard/Category/AddCategory";
import UpdateCategory from "../pages/dashboard/Category/UpdateCategory";
import AllMessagesPage from "../pages/dashboard/Message/AllMessages";

const GlobalRouter = () => {
  return (
    <Routes>
      {/* <Route path='' element /> */}
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route index element={<HomePage />} />
        <Route path={PATH_PUBLIC.register} element={<RegisterPage />} />
        <Route path={PATH_PUBLIC.login} element={<LoginPage />} />
        <Route path={PATH_PUBLIC.unauthorized} element={<UnauthorizedPage />} />
        <Route path={PATH_PUBLIC.catalog} element={<CatalogPage />} />
        <Route path={PATH_PUBLIC.about} element={<AboutPage />} />
        <Route path={PATH_PUBLIC.productDetail} element={<ProductDetail />} />
        <Route path={PATH_PUBLIC.cart} element={<CartPage />} />
        <Route path={PATH_PUBLIC.checkout} element={<CheckoutPage />} />
        <Route path={PATH_PUBLIC.contact} element={<ContactPage />} />
        <Route path={PATH_PUBLIC.thankyou} element={<ThankYouPage />} />

        {/* Protected routes -------------------------------------------------- */}
        <Route element={<AuthGuard roles={allAccessRoles} />}>
          <Route path={PATH_DASHBOARD.dashboard} element={<DashboardPage />} />
          <Route
            path={PATH_DASHBOARD.sendMessage}
            element={<MySendboxPage />}
          />
          <Route
            path={PATH_DASHBOARD.createMessage}
            element={<SendMessagePage />}
          />
          <Route
            path={PATH_DASHBOARD.allMessages}
            element={<AllMessagesPage />}
          />
          <Route
            path={PATH_DASHBOARD.messageDetail}
            element={<MessageDetail />}
          />
          <Route path={PATH_DASHBOARD.orderDetail} element={<OrderDetail />} />
          <Route
            path={PATH_DASHBOARD.productManagement}
            element={<ProductManagement />}
          />
          <Route
            path={PATH_DASHBOARD.cargoManagement}
            element={<CargoManagement />}
          />
          <Route
            path={PATH_DASHBOARD.updateCargo}
            element={<UpdateCargoStatusPage />}
          />
          <Route
            path={PATH_DASHBOARD.updateMyProfile}
            element={<UpdateMyProfilePage />}
          />
          <Route
            path={PATH_DASHBOARD.categoryManagement}
            element={<CategoryManagement />}
          />
          <Route path={PATH_DASHBOARD.addCategory} element={<AddCategory />} />
          <Route
            path={PATH_DASHBOARD.updateCategory}
            element={<UpdateCategory />}
          />

          <Route path={PATH_DASHBOARD.addUser} element={<AddUser />} />
          <Route path={PATH_DASHBOARD.addProducts} element={<AddProduct />} />
          <Route path={PATH_DASHBOARD.inbox} element={<InboxPage />} />
          <Route path={PATH_DASHBOARD.myLogs} element={<MyLogsPage />} />
          <Route path={PATH_DASHBOARD.user} element={<UserPage />} />
        </Route>
        <Route element={<AuthGuard roles={managerAccessRoles} />}>
          <Route path={PATH_DASHBOARD.manager} element={<ManagerPage />} />
        </Route>
        <Route element={<AuthGuard roles={adminAccessRoles} />}>
          <Route
            path={PATH_DASHBOARD.usersManagement}
            element={<UsersManagementPage />}
          />
          <Route
            path={PATH_DASHBOARD.updateRole}
            element={<UpdateRolePage />}
          />
          <Route path={PATH_DASHBOARD.orders} element={<Order />} />
          <Route
            path={PATH_DASHBOARD.systemLogs}
            element={<SystemLogsPage />}
          />
          <Route path={PATH_DASHBOARD.admin} element={<AdminPage />} />
        </Route>
        <Route element={<AuthGuard roles={ownerAccessRoles} />}>
          <Route path={PATH_DASHBOARD.owner} element={<OwnerPage />} />
        </Route>
        {/* Protected routes -------------------------------------------------- */}

        {/* Catch all (404) */}
        <Route path={PATH_PUBLIC.notFound} element={<NotFoundPage />} />
        <Route
          path="*"
          element={<Navigate to={PATH_PUBLIC.notFound} replace />}
        />
      </Route>
    </Routes>
  );
};

export default GlobalRouter;
