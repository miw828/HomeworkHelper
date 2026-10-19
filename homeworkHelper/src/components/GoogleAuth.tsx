import { GoogleLogin, type CredentialResponse } from "@react-oauth/google"


function LogSignup(){
   
   const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log("Google login successful!");
    console.log(credentialResponse);
   };

   const handleError = () => {
    console.log("Google login failed");
   }


   // need to include an if case - if the google id has information already stored it should go straight to the dashboard
   // if it's not familiar it should go to the questionaire. 
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