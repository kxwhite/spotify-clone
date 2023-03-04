import React from 'react'
import logo from '../assets/nomatch_assets/spotify-logo-icon.png'
import '../styles/NoMatch.css'
import { Link, useNavigate } from "react-router-dom";

function NoMatch() {
  const navigate = useNavigate();
  return (
    <div className='nomatch--container'>
      <img src={logo} alt="Spotify Logo in green" className='nomatch--img'/>
      <h1 className='nomatch--title'>Page not found</h1>
      <p className='nomatch--para'>We can't seem to find the page you are looking for.</p>
      <div className='nomatch--btns'>
        <button className='nomatch--btn' onClick={() => navigate('')}>Home</button>
        <Link href="#" className='nomatch--link'>Help</Link>
      </div>
    </div>
  );
}

export default NoMatch
