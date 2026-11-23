export type ROLES = "admin" | "manager" | "staff"

type RolePermission = Record<ROLES, string[]>

export const ROLE_PERMISSIONS: RolePermission = {
    "admin": ["component1:read", "component2:read", "component3:read", "component4:read", "dashboard:view", "adminpage:view", "managerpage:view", "staffpage:view"],
    "manager": ["component2:read", "component3:read", "dashboard:view", "managerpage:view", "staffpage:view"],
    "staff": ["component3:read", "component4:read", "dashboard:view", "staffpage:view"],
}