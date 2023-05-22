import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import AccountMenu from './common/AccountMenu';
import { useStateProviderValue } from '../StateProvider';
import { useScrollPosition } from './ScrollPosition';

function Navbar({spotify, token, setToken}) {
  const [{ user }, dispatch] = useStateProviderValue();
  const [colourChange, setColourChange] = useState(false)

  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const activeUser = !user ? "navbar--container" : "navbar--container-loggedin nav--bg";
  const navColour = !colourChange ? "navbar--container-loggedin" : "navbar--container-loggedin nav--bg";
  const activeUserAndNavColour = !user ? "navbar--container" : (!colourChange ? "navbar--container-loggedin" : "navbar--container-loggedin nav--bg");

  return (
    <div className={`${navColour}`}>
      <div className="nav--arrow-container">
        <Link>
          <NavigateBefore sx={{ color: "#A4A4A4", fontSize: 40 }} className="nav--back-arrow" onClick={() => window.history.go(-1)} />
        </Link>
        <Link>
          <NavigateNext sx={{ color: "#A4A4A4", fontSize: 40 }} className="nav--next-arrow" onClick={() => window.history.go(1)} />
        </Link>
      </div>

      {user ? (
        <div className="nav--login-btns">
          <button className="nav--btn-upgrade">Upgrade</button>
          <div className="nav--user-container">
            <AccountMenu className="nav--menu" />
          </div>
        </div>
      ) : (
        <div className="nav--login-btns">
          <Link to="/signup" className="nav--sign-up">
            Sign up
          </Link>
          {!user ? (
            <button className="nav--btn-login" onClick={() => navigate("login")} >
              Log in
            </button>
          ) : (
            <button className="nav--btn-login" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar
