import type { ReactNode } from "react";
import hasPermission from "../../helpers/permissionChecker";
import type { ROLES } from "../../permission";

interface ModulePermission {
  role: ROLES;
  permission: string;
  children: ReactNode;
}

function ModulePermission({ role, permission, children }: ModulePermission) {
  const isAllow = hasPermission(role, permission);

  if (!isAllow) return null;

  return children;
}

export default ModulePermission;
