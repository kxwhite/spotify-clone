import React from 'react'
import logo from '../assets/sidebar_assets/Spotify_Logo_RGB_White.png'
import './Sidebar.css'
import { Home, Search, LibraryMusic, AddBox, Favorite } from '@mui/icons-material'
import { Link } from "react-router-dom";
import CustomizedDialogs from './common/DialogModal'

function Sidebar() {
  return (
    <div className='sidebar--container'>
      <Link to='/'>
        <img src={logo} alt="Spotify Logo" className='sidebar--logo'/>
      </Link>
      <div className="sidebar--links">
        <div className='sidebar--link-cont'><Home className='sidebar--icons' sx={{ fontSize: 30 }}/><Link className='sidebar--link'>Home</Link></div>
        <div className='sidebar--link-cont'><Search className='sidebar--icons' sx={{ fontSize: 30 }}/><Link className='sidebar--link'>Search</Link></div>
        <div className='sidebar--link-cont'><LibraryMusic className='sidebar--icons' sx={{ fontSize: 30 }}/><Link className='sidebar--link'>Your Library</Link></div>
      </div>

      <div className="sidebar--playlists">
        <br/>
        <p className='sidebar--title'>Playlists</p>

        <div className='sidebar--link-cont sidebar--create'>
          <AddBox className='sidebar--icons' sx={{ fontSize: 30 }}/>
          <Link className='sidebar--link'>Create Playlist</Link>
        </div>

        <div className='sidebar--link-cont sidebar--create sidebar--opacity'>
          <div className='sidebar--fav'>
            <Favorite className='sidebar--icons sidebar--fav-icon' sx={{ fontSize: 16 }}/>
          </div>
          <Link className='sidebar--link'>Liked Songs</Link>
        </div>

        <hr className='sidebar--hr'/>
      </div>

      <div className='sidebar--personal-playlist'>
        <p>RapCaviar</p>
        <p>Music mix #1</p>
        <p>Music mix #2</p>
      </div>

      <div className="sidebar--cookies-country">
        <Link className='sidebar--cookies'>Cookies</Link>
        <CustomizedDialogs />
      </div>
    </div>
  )
}

export default Sidebar
