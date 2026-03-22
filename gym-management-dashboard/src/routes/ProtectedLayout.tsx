import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function ProtectedLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app">
      <div className="app__content">
        <Navbar />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}