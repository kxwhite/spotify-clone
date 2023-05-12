import React from "react";
import spotify from "../assets/login_assets/spotify.png";
import fbimg from "../assets/login_assets/fbimg.png";
import appleimg from "../assets/login_assets/appleimg.png";
import googleimg from "../assets/login_assets/googleimg.png";
import "../styles/login.css";
import { accessUrl } from "../spotify";

function Login() {
  return (
    <div>
      <div className="img--container">
        <img src={spotify} alt="" className="logoImg" />
      </div>
      <div className="group--container">
        <h4 className="message">To continue, log in to Spotify</h4>

        <div className="btns--container">
          <button className="fbbtn login--btn">CONTINUE WITH FACEBOOK</button>
          <img className="spanImgfb" src={fbimg} alt="" />
          <button className="applebtn login--btn">CONTINUE WITH APPLE</button>
          <img className="spanImgapple" src={appleimg} alt="" />
          <button className="googlebtn login--btn">CONTINUE WITH GOOGLE</button>
          <img className="spanImggoogle" src={googleimg} alt="" />
        </div>

        <div className="divider">
          <hr className="hr" />
          <h6 className="or">OR</h6>
          <hr className="hr" />
        </div>
        <div className="form">
          <form>
            <div className="wrapper">
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
              />{" "}
              <a className="forgotLink" href>
                Forgot your password?
              </a>
              <label className="remember">Remember Me</label>
              <input className="check" type="checkbox" />
              <button className="btnLogin"><a href={accessUrl}>LOG IN</a></button>
              <hr id="span3" />
            </div>
            <div className="wrap">
              <h3 className="account">Don't have an account?</h3>{" "}
              <button className="signup">SIGN UP FOR SPOTIFY</button>
            </div>

            {/** **/}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
