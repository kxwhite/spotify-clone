import React from 'react'
import './Navbar.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import paul from "../assets/navbar_assets/paulrudd.jpeg";
import AccountMenu from './common/AccountMenu';

function Navbar() {
  const login = false;
  return (
    <div className='navbar--container'>
      <div className="nav--arrow-container">
        <a><NavigateBefore sx={{ color: '#A4A4A4', fontSize: 40 }} className='nav--back-arrow'/></a>
        <a><NavigateNext sx={{ color: '#A4A4A4', fontSize: 40 }} className='nav--next-arrow'/></a>
      </div>

      {login ?
        <div className="nav--user-container">
          <Avatar alt="Paul Rudd" src={paul} sx={{ width: 30, height: 30 }} className='nav--avatar'/>
          <strong className='nav--username'>Paul Rudd</strong>
          <AccountMenu className="nav--menu"/>
        </div>
          :
        <div className="nav--login-btns">
          <a className='nav--sign-up'>Sign up</a>
          <button className='nav--btn-login'>Log in</button>
        </div>
      }
    </div>
  )
}

export default Navbar
