import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import AttendancePage from "../pages/Attendance/AttendancePage";
import MembersTablePage from "../pages/Members/MembersTablePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/members" element={<MembersTablePage />} />
      <Route path="/attendance" element={<AttendancePage />} />
    </Routes>
  );
}