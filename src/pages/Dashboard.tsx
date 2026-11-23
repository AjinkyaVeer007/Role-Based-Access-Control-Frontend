import ModulePermission from "../components/permission/ModulePermission";
import { role } from "../constants";

function Dashboard() {
  return (
    <div className="container">
      <ModulePermission role={role} permission="component1:read">
        <div className="box component1">Only admin can see</div>
      </ModulePermission>
      <ModulePermission role={role} permission="component2:read">
        <div className="box component2">Admin, Manager can see</div>
      </ModulePermission>
      <ModulePermission role={role} permission="component3:read">
        <div className="box component3">Admin, Manager, Staff can see</div>
      </ModulePermission>
      <ModulePermission role={role} permission="component4:read">
        <div className="box component4">Admin, Staff can see</div>
      </ModulePermission>
    </div>
  );
}

export default Dashboard;
