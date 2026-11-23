import { Navigate, Outlet } from "react-router";
import hasPermission from "../../helpers/permissionChecker";
import type { ROLES } from "../../permission";

interface PROTECT_ROUTES {
  role: ROLES;
  permission: string;
}

function ProtectRoutes({ role, permission }: PROTECT_ROUTES) {
  if (!role) {
    return <Navigate to={"/"} replace />;
  }

  const isAllow = hasPermission(role, permission);
  if (!isAllow) {
    return <Navigate to={"/unauthorized"} replace />;
  }
  return <Outlet />;
}

export default ProtectRoutes;
