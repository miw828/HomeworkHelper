import { Navigate } from 'react-router-dom";
import {useAuth } from '../components/AuthContext'; 

function Login() {
    const {user, loading, signInWithGoogle } = useAuth();

    if (loading) return <p>Loading...</p>;
    if(user) return <Navigate to="/" replace />;

      return (
    <div style={{ maxWidth: 360, margin: '4rem auto', textAlign: 'center' }}>
      <h1>Welcome</h1>
      <button onClick={signInWithGoogle}>Continue with Google</button>
    </div>
  );


}
