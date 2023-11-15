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
import SendMessagePage from "../pages/dashboard/SendMessagePage";
import InboxPage from "../pages/dashboard/InboxPage";
import MyLogsPage from "../pages/dashboard/MyLogsPage";
import UserPage from "../pages/dashboard/UserPage";
import ManagerPage from "../pages/dashboard/ManagerPage";
import UsersManagementPage from "../pages/dashboard/UserManagementPage";
import UpdateRolePage from "../pages/dashboard/UpdateRolePage";
import AllMessagesPage from "../pages/dashboard/AllMessages";
import AdminPage from "../pages/dashboard/AdminPage";
import SystemLogsPage from "../pages/dashboard/SystemLogsPage";
import OwnerPage from "../pages/dashboard/OwnerPage";
import NotFoundPage from "../pages/public/NotFoundPage";
import Catalog from "../pages/public/CatalogPage";

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
        <Route path={PATH_PUBLIC.catalog} element={<Catalog />} />

        {/* Protected routes -------------------------------------------------- */}
        <Route element={<AuthGuard roles={allAccessRoles} />}>
          <Route path={PATH_DASHBOARD.dashboard} element={<DashboardPage />} />
          <Route
            path={PATH_DASHBOARD.sendMessage}
            element={<SendMessagePage />}
          />
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
          <Route
            path={PATH_DASHBOARD.allMessages}
            element={<AllMessagesPage />}
          />
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
