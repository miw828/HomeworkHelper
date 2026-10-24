import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "./components/AuthContext";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboad";
import Profile from "./pages/Profile";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

// Supabase finishes the OAuth exchange on its own when the page loads;
// this route just waits for the session, then forwards to the dashboard.
function AuthCallback() {
  const { user, loading } = useAuth();
  if (loading) return <p>Signing you in...</p>;
  return <Navigate to={user ? "/UserDashboard" : "/login"} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route
        path="/UserDashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}