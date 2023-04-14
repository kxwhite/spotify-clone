import React, {useEffect, useState} from "react";
import spotify from "../assets/login_assets/spotify.png";
import fbimg from "../assets/login_assets/fbimg.png";
import appleimg from "../assets/login_assets/appleimg.png";
import googleimg from "../assets/login_assets/googleimg.png";
import "../styles/login.css";
import axios from 'axios'

function Login({CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE}) {

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {
      token = hash.substring(1).split("&").find(e => e.startsWith("access_token")).split("=")[1]

      window.hash = ""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
  }, [])

  const handleLogout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }


  return (
    <div>
      <div className="imgNav">
        <img src={spotify} alt="" className="logoImg" />
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
            {!token ?
            <button className="btnLogin">
              <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                LOG IN
              </a>
            </button>
            :
            <button onClick={handleLogout}>
                LOG OUT
            </button>
            }
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
