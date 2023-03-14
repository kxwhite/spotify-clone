import React from "react";
import spotify from "../assets/login_assets/spotify.png";
import fbimg00 from "../assets/signup_assets/fbimg00.png";
import googleimg00 from "../assets/signup_assets/googleimg00.png";
import "../styles/signUp.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate, Link } from "react-router-dom";

export default function ContainerSignUp() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="part1">
        <img className="img" src={spotify} alt="" />
      </div>

      <div className="part2">
        <h1 className="header"> Sign up for free to start listening.</h1>
      </div>
      <div className="part3">
        <button className="fbbtn">Sign up with Facebook</button>
        <img className="spanImgfb" src={fbimg00} alt="" />
        <button className="googlebtn">Sign up with Google</button>
        <img className="spanImggoogle" src={googleimg00} alt="" />
      </div>
      <form className="form">
        <div id="span1"></div> <h4 className="or">or</h4>
        <div id="span2"></div>
        <h3 className="signUp">Sign up with your email address</h3>
        <label className="emailLabel">What is your email?</label>
        <input
          className="emailInput"
          type="text"
          placeholder="Enter your email"
        />
        <br />
        <label className="emailLabel1">Confirm your email</label>
        <input
          className="emailInput1"
          type="text"
          placeholder="Confirm your email again"
        />
        <label className="passwordLabel">Create your password</label>
        <input
          className="passwordInput"
          type="password"
          placeholder="Create a Password"
        />
        <label className="profileLabel">What should we call you?</label>
        <input
          className="profileInput"
          type="text"
          placeholder="Enter a Profile name"
        />
        <h6 className="small">This appears on your profile.</h6>
        <h4 className="dob">What's your date of birth?</h4>
        <label className="dd">Day</label>
        <br />
        <input className="day" type="text" placeholder="DD" />
        <label className="month">Month</label>
        <select className="months">
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
        <label className="yearLabel">Year</label>
        <input className="yearInput" type="text" placeholder="YYYY" />
        <h4 className="gender">What's your gender?</h4>
        <input className="maleRadio" type="radio" />
        <label className="male">Male</label>
        <input className="femaleRadio" type="radio" />
        <label className="female">Female</label>
        <input className="nonbinaryRadio" type="radio" />
        <label className="nonbinary">Non-binary</label>
        <input className="otherRadio" type="radio" />
        <label className="other">Other</label>
        <br />
        <input className="preferRadio" type="radio" />
        <label className="prefer">Prefer not to say</label>
        <input className="checkbox0" type="checkbox" />
        <label className="labelmessage">
          I would prefer not to receive marketing messages from Spotify
        </label>
        <input className="checkbox1" type="checkbox" />
        <label className="labelmessage0">
          Share my registration data with Spotify's content providers for
          marketing purposes. Note that your data may be transferred to a
          country outside of the EEA as <br /> described in our privacy policy.
        </label>
      </form>
      <h5 className="spot">
        Spotify is a personalised service. By clicking on sign-up, you agree to
        Spotify's
        <a
          className="a"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions of Use.
        </a>
      </h5>
      <h5 className="learn">
        To learn more about how Spotify collects, uses, shares and protects your
        personal data, <br /> please see
        <a
          className="a"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify's Privacy Policy.
        </a>
      </h5>
      <button onClick={() => navigate("")} className="button">
        Sign Up
      </button>
      <h3 className="h3">
        Have an account?{" "}
        <Link
          to="/signup"
          className="a"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log in
        </Link>
      </h3>
    </div>
  );
}
