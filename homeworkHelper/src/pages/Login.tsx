import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import LogSignup from "../components/GoogleAuth";

export default function Login() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (user) return <Navigate to="/UserDashboard" replace />;

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto", textAlign: "center" }}>
      <LogSignup />
    </div>
  );
}