import React from "react";
import spotify from "../images/spotify.png";
import fbimg from "../images/fbimg.png";
import appleimg from "../images/appleimg.png";
import googleimg from "../images/googleimg.png";
import "../CSS/login.css";
function Login() {
  return (
    <div>
      <div className="imgNav">
        <img src={spotify} alt="" />
      </div>
      <div className="fmessage">
        <h4 className="message">To continue, log in to Spotify</h4>
      </div>

      <div>
        <button className="fbbtn">CONTINUE WITH FACEBOOK</button>
        <img className="spanImgfb" src={fbimg} alt="" />
        <button className="applebtn">CONTINUE WITH APPLE</button>
        <img className="spanImgapple" src={appleimg} alt="" />
        <button className="googlebtn">CONTINUE WITH GOOGLE</button>
        <img className="spanImggoogle" src={googleimg} alt="" />
      </div>
      <div className="remainingForm">
        <div id="span1"></div> <h4 className="or">OR</h4>
        <div id="span2"></div>
        <form>
          <label className="emailLabel">Email address or username</label>
          <input
            className="emailInput"
            type="text"
            placeholder="Email address or username"
          />
          <label className="passwordLabel">Password</label>
          <input
            className="passwordInput"
            type="password"
            placeholder="Password"
          />
          <a className="forgotLink" href>
            Forgot your password?
          </a>
          <div>
            <label className="remember">Remember Me</label>
            <input className="check" type="checkbox" />
            <button className="btnLogin">LOG IN</button>
            <div id="span3"></div>
          </div>
          <h3 className="account">Don't have an account?</h3>
          <button className="signup">SIGN UP FOR SPOTIFY</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
