import React from "react";
import spotify from "../assets/login_assets/spotify.png";
import googleimg00 from "../assets/signup_assets/googleimg00.png";
import "../styles/SignUp.css";
import { useNavigate, Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContainerSignUp() {
  const navigate = useNavigate();
  return (
    <div className="signup--container">
      <div className="signup--layout">

        <div className="signup--top-section">
          <img className="signup--logo" src={spotify} alt="" />
          <h1 className="signup--header"> Sign up for free to start listening.</h1>

          <div className="signup--btns">
            <button className="signup--fb-btn signup--btn"><FacebookIcon className="signup--fb-icon"/>Sign up with Facebook</button>
            <button className="signup--google-btn signup--btn">
              <img className="signup--img-google" src={googleimg00} alt="" />
              Sign up with Google
            </button>
          </div>
        </div>

        <div className="signup--divider">
          <hr className="signup--hr"/>
          <p className="signup--or">or</p>
          <hr className="signup--hr"/>
        </div>

        <form className="signup--form">
          <h3 className="signup--form-title">Sign up with your email address</h3>

          <label htmlFor="email" className="label">What is your email?</label>
          <input id="email" className="input" type="email" placeholder="Enter your email"/>
          {/* <br /> */}
          <label htmlFor="confirm" className="label">Confirm your email</label>
          <input id="confirm" className="input" type="text" placeholder="Confirm your email again"/>

          <label htmlFor="password" className="label">Create your password</label>
          <input id="password" className="input" type="password" placeholder="Create a Password"/>

          <label htmlFor="name" className="label">What should we call you?</label>
          <input id="name" className="input" type="text" placeholder="Enter a Profile name"/>
          <h6 className="signup--form-name-small">This appears on your profile.</h6>

          <p className="label">What's your date of birth?</p>
          <div className="signup--date-container">
            <div className="signup--date-wrappers">
              <label for="day" className="signup--form-date-labels">Day</label>
              <input id="day" className="signup--form-day-input input-date" type="text" placeholder="DD" />
            </div>

            <div className="signup--date-wrappers">
              <label for="month" className="signup--form-date-labels">Month</label>
              <select id="month" className="signup--form-month-input input-date">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

              <div className="signup--date-wrappers">
                <label for="year" className="signup--form-date-labels">Year</label>
                <input id="year" className="signup--form-year-input input-date" type="text" placeholder="YYYY" />
              </div>
          </div>

          <p className="label">What's your gender?</p>
          <div className="signup--gender-wrapper">
            <input name="signup-radio" id="male" className="input-radio" type="radio" />
            <label htmlFor="male" className="label-radio">Male</label>
            <input name="signup-radio" id="female" className="input-radio" type="radio" />
            <label htmlFor="female" className="label-radio">Female</label>
            <input name="signup-radio" id="nonbinary" className="input-radio" type="radio" />
            <label htmlFor="nonbinary" className="label-radio">Non-binary</label>
            <input name="signup-radio" id="other" className="input-radio" type="radio" />
            <label htmlFor="other" className="label-radio">Other</label>
            <br />
            <input name="signup-radio" id="prefer" className="input-radio radio-prefer" type="radio" />
            <label htmlFor="prefer" className="label-radio">Prefer not to say</label>
          </div>

          <div className="signup--checkbox-container">
            <div className="signup--checkbox-wrapper">
              <input id="marketing" className="signup--checkbox" type="checkbox" />
              <label htmlFor="marketing" className="signup--checkbox-label">
                I would prefer not to receive marketing messages from Spotify
              </label>
            </div>
            <br/>
            <div className="signup--checkbox-wrapper">
              <input id="data-sharing" className="signup--checkbox" type="checkbox" />
              <label htmlFor="data-sharing" className="signup--checkbox-label">
                Share my registration data with Spotify's content providers for
                marketing purposes. Note that your data may be transferred to a
                country outside of the EEA as <br /> described in our privacy policy.
              </label>
            </div>
          </div>
        </form>

        <h5 className="signup--tc">
          Spotify is a personalised service. By clicking on sign-up, you agree to
          Spotify's&nbsp;
          <Link
            className="signup--link"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions of Use.
          </Link>
        </h5>

        <h5 className="signup--tc">
          To learn more about how Spotify collects, uses, shares and protects your
          personal data, please see&nbsp;
          <Link
            className="signup--link"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify's Privacy Policy.
          </Link>
        </h5>

        <button onClick={() => navigate('')} className="signup--button">
          Sign Up
        </button>

        <h3 className="signup--account-q">
          Have an account?{" "}
          <Link
            to="/login"
            className="signup--link"
            href="http://"
            rel="noopener noreferrer"
          >
            Log in
          </Link>
        </h3>
      </div>
    </div>
  );
}
