import React from 'react'
import "../styles/LoginButton.css";
import { accessUrl } from "../spotify";
import { Link } from 'react-router-dom';
import SpotifyLogo from '../assets/sidebar_assets/Spotify_Logo_RGB_White.png'

export default function LoginButton() {
  return (
    <div className="login-button--container">
      <div className="login-button--logo-container">
        <img
          src={SpotifyLogo}
          alt="Spotify Logo"
          className="login-button--logo"
        />
      </div>
      <div className="login-button--main-section">
        <h1 className="login-button--title">Log in to enter.</h1>
        <Link to={accessUrl} className="login-button--btn">
          Log In
        </Link>
        <p className="login-button--signup">
          Don't have an account?&nbsp;
          <span>
            <Link
              className="login-button--signup-link"
              to="https://www.spotify.com/uk/signup?flow_id=af0009a9-5777-46fa-b7aa-9cbc88f8d669%3A1711204008&forward_url=https%3A%2F%2Faccounts.spotify.com%2Fen-GB%2Fstatus"
            >
              Sign up for Spotify
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
