import { ROLE_PERMISSIONS, type ROLES } from "../permission"

const hasPermission = (role: ROLES, permission: string): boolean => {
    const allow = ROLE_PERMISSIONS[role].includes(permission)

    return allow
}

export default hasPermission