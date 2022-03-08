import {  signInWithGoogle } from "../firebase-config";

function Login() {
  return (
    <div className="Login">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img alt="profile" src={localStorage.getItem("profilePic")}/>
    </div>
  );
}

export default Login;