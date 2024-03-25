import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { AccessTime, NavigateBefore, NavigateNext, PlayCircle, SearchRounded } from '@mui/icons-material';
import AccountMenu from './common/AccountMenu';
import { useStateProviderValue } from '../StateProvider';

function Navbar({spotify, token, setToken, inView, generalInView, searchInView, passColourData, passPlaylistName}) {
  const [{ user }, dispatch] = useStateProviderValue();

  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const activeUser = !user ? "navbar--container" : "navbar--container-loggedin";

  return (
    <>
      <div
        className={`${activeUser} ${
          !generalInView || !searchInView ? "nav--bg" : ""
        }`}
        style={!inView ? { backgroundColor: `${passColourData}` } : {}}
      >
        <div className="nav--arrow-container">
          <Link>
            <NavigateBefore
              sx={{ color: "#A4A4A4", fontSize: 40 }}
              className="nav--back-arrow"
              onClick={() => window.history.go(-1)}
            />
          </Link>
          <Link>
            <NavigateNext
              sx={{ color: "#A4A4A4", fontSize: 40 }}
              className="nav--next-arrow"
              onClick={() => window.history.go(1)}
            />
          </Link>
          {!inView ? (
            <div className="nav--extra-play">
              <PlayCircle
                sx={{ fontSize: "60px", color: "#1EB954" }}
                className="playlist--play-btn"
              />
              <h2 className="nav--playlist-name">{passPlaylistName}</h2>
            </div>
          ) : null}
          {!searchInView ? (
            <div className="searchbar--cont">
              <SearchRounded
                sx={{ fontSize: "25px", color: "black" }}
                className="searchbar--more-btn searchbar--icon"
              />
              <input
                className="searchbar--input"
                type="text"
                placeholder="What do you want to listen to?"
              />
            </div>
          ) : null}
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
      {!inView ? (
        <div className="navbar--table-container nav--table-head">
          <div className="nav--table-first">
            <p className="nav--table-header">#</p>
            <p className="nav--table-header">Title</p>
          </div>
          <p className="nav--table-header">Album</p>
          <p className="nav--table-header">Date Added</p>
          <p className="nav--clock">
            <AccessTime sx={{ fontSize: "20px", color: "#767676" }} />
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Navbar
