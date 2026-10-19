import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"


function LogSignup(){
   
   const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log("Google login successful!");
    console.log(credentialResponse);
   };

   const handleError = () => {
    console.log("Google login failed");
   }

   return (
    <>
    <h1> Login or Signup </h1>
    
    <GoogleLogin
    onSuccess={handleSuccess}
    onError={handleError}
    text= "continue_with"
    />
    
    
    </>
   )
}
export default LogSignup; 