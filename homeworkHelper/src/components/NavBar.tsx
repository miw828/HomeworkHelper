// Should have Settings -- in the future you should be able to have the displays 
// Profile 
// UserDashboard
// Course Dashboards. 
// Calendar Dashboard 
// To Do Dashboard 
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Future: Settings, Course Dashboards, Calendar Dashboard, To Do Dashboard
export default function NavBar() {
  const { signOut } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/UserDashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={signOut}>Sign out</button>
    </nav>
  );
}