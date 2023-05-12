import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import AccountMenu from './common/AccountMenu';
import { useStateProviderValue } from '../StateProvider';

function Navbar({spotify, token, setToken}) {
  const [{ user }, dispatch] = useStateProviderValue();

  const login = true;
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className={(!user ? "navbar--container" : "navbar--container-loggedin")}>
      <div className="nav--arrow-container">
        <Link>
          <NavigateBefore
            sx={{ color: "#A4A4A4", fontSize: 40 }}
            className="nav--back-arrow"
            onClick={() => navigate.back()}
          />
        </Link>
        <Link>
          <NavigateNext
            sx={{ color: "#A4A4A4", fontSize: 40 }}
            className="nav--next-arrow"
          />
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
            <button
              className="nav--btn-login"
              onClick={() => navigate("login")}
            >
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
