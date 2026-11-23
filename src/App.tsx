import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ProtectRoutes from "./components/routes/ProtectRoutes";
import Dashboard from "./pages/Dashboard";
import AdminPage from "./pages/AdminPage";
import StaffPage from "./pages/StaffPage";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ManagerPage from "./pages/ManagerPage";
import { role } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Unauthorized />} path="/unauthorized" />
        <Route
          element={<ProtectRoutes role={role} permission="dashboard:view" />}
        >
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
        <Route
          element={<ProtectRoutes role={role} permission="adminpage:view" />}
        >
          <Route element={<AdminPage />} path="/admin" />
        </Route>
        <Route
          element={<ProtectRoutes role={role} permission="managerpage:view" />}
        >
          <Route element={<ManagerPage />} path="/manager" />
        </Route>
        <Route
          element={<ProtectRoutes role={role} permission="staffpage:view" />}
        >
          <Route element={<StaffPage />} path="/staff" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
