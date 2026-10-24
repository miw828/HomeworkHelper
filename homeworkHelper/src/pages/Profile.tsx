import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

// TODO: picture upload later; for now just display the username

export default function Profile() {
  const { user } = useAuth();
  const username =
    user?.user_metadata?.full_name ?? user?.email ?? "Unknown user";

  return (
    <div>
      <h1>Profile</h1>
      {user?.user_metadata?.avatar_url && (
        <img
          src={user.user_metadata.avatar_url}
          alt="Profile"
          width={96}
          height={96}
        />
      )}
      <p>{username}</p>
      <Link to="/UserDashboard">Back to dashboard</Link>
    </div>
  );
}