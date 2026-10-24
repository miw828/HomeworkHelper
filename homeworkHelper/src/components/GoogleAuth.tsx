import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { supabase } from "../services/supabaseClient";

export default function LogSignup() {
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      console.error("No Google credential returned");
      return;
    }

    const { error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: credentialResponse.credential,
    });

    if (error) console.error("Supabase sign-in failed:", error.message);
    // AuthContext picks up the new session; Login redirects to the dashboard.
    // TODO: new Google account -> questionnaire, existing -> dashboard
  };

  const handleError = () => {
    console.error("Google login failed");
  };

  return (
    <>
      <h1>Login or Signup</h1>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        text="continue_with"
      />
    </>
  );
}