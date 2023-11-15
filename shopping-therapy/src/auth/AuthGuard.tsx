import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.hook";
import { PATH_PUBLIC } from "../router/Routes";
import AuthSpinner from "../layout/dashboard/AuthSpinner";

interface IProps {
  roles: string[];
}

export default function AuthGuard({ roles }: IProps) {
  const { isAuthenticated, user, isAuthLoading } = useAuth();
  const hasAccess =
    isAuthenticated && user?.roles?.find((q) => roles.includes(q));
  if (isAuthLoading) {
    return <AuthSpinner />;
  }
  return hasAccess ? <Outlet /> : <Navigate to={PATH_PUBLIC.unauthorized} />;
}
