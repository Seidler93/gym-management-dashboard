import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AttendancePage from "../pages/Attendance/AttendancePage";
import MembersTablePage from "../pages/Members/MembersTablePage";
import LoginPage from "../pages/Login/LoginPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>      

      <Route element={<ProtectedLayout/>}>
        <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/members" element={<MembersTablePage/>}/>
        <Route path="/attendance" element={<AttendancePage/>}/>
      </Route>
    </Routes>
  );
}