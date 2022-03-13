import axios from "axios";
import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Context } from "../context";

const clientId =
  "370901220388-7lerp94l35aq6jrubp7lucvra35569cb.apps.googleusercontent.com";

function Login() {
  // Code source: https://codingdiksha.com/login-with-google-using-reactjs/

  const { setIsUserLoggedIn, setUser } = useContext(Context);

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setIsUserLoggedIn(true);

    setUser(res.profileObj);

    const user = {
      googleId: res.profileObj.googleId,
      email: res.profileObj.email,
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName
    }

    axios
      .post("http://localhost:8080/api/v1/user/register", user)
      .then((res) => console.log(res.data))
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    // alert("You have been logged out successfully");
    // console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
    setIsUserLoggedIn(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default Login;
