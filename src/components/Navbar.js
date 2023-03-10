import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import paul from "../assets/navbar_assets/paulrudd.jpeg";
import AccountMenu from './common/AccountMenu';

function Navbar() {
  const login = false;
  const navigate = useNavigate();

  return (
    <div className='navbar--container'>
      <div className="nav--arrow-container">
        <Link><NavigateBefore sx={{ color: '#A4A4A4', fontSize: 40 }} className='nav--back-arrow'/></Link>
        <Link><NavigateNext sx={{ color: '#A4A4A4', fontSize: 40 }} className='nav--next-arrow'/></Link>
      </div>

      {login ?
        <div className="nav--user-container">
          <Avatar alt="Paul Rudd" src={paul} sx={{ width: 30, height: 30 }} className='nav--avatar'/>
          <strong className='nav--username'>Paul Rudd</strong>
          <AccountMenu className="nav--menu"/>
        </div>
          :
        <div className="nav--login-btns">
          <Link className='nav--sign-up'>Sign up</Link>
          <button className='nav--btn-login' onClick={() => navigate('login')}>Log in</button>
        </div>
      }
    </div>
  )
}

export default Navbar
