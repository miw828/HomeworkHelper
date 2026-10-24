import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import NavBar from "../components/NavBar";
// TODO: import the calendar, courses, internships, profile, to-dos

export default function UserDashboard() {
  const { user } = useAuth();

  // Simplified view of the different dashboards
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
      <p>Signed in as {user?.email}</p>
      <Link to="/profile">Go to profile</Link>
    </div>
  );
}
