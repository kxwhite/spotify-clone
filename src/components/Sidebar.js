import React from 'react'
import logo from '../assets/sidebar_assets/Spotify_Logo_RGB_White.png'
import './Sidebar.css'
import { Home, Search, LibraryMusic, AddBox, Favorite } from '@mui/icons-material'
import CustomizedDialogs from './common/DialogModal'

function Sidebar() {
  return (
    <div className='sidebar--container'>
      <img src={logo} alt="Spotify Logo" className='sidebar--logo'/>
      <div className="sidebar--links">
        <div className='sidebar--link-cont'><Home className='sidebar--icons' sx={{ fontSize: 30 }}/><a className='sidebar--link'>Home</a></div>
        <div className='sidebar--link-cont'><Search className='sidebar--icons' sx={{ fontSize: 30 }}/><a className='sidebar--link'>Search</a></div>
        <div className='sidebar--link-cont'><LibraryMusic className='sidebar--icons' sx={{ fontSize: 30 }}/><a className='sidebar--link'>Your Library</a></div>
      </div>
      <div className="sidebar--playlists">
        <br/>
        <p className='sidebar--title'>Playlists</p>
        <div className='sidebar--link-cont sidebar--create'><AddBox className='sidebar--icons' sx={{ fontSize: 30 }}/><a className='sidebar--link'>Create Playlist</a></div>
        <div className='sidebar--link-cont sidebar--create'><div className='sidebar--fav'><Favorite className='sidebar--icons sidebar--fav-icon' sx={{ fontSize: 16 }}/></div><a className='sidebar--link'>Liked Songs</a></div>
        <hr className='sidebar--hr'/>
      </div>
      <div className='sidebar--personal-playlist'>
        <p>RapCaviar</p>
        <p>Music mix #1</p>
        <p>Music mix #2</p>
      </div>
      <div className="sidebar--cookies-country">
        <a className='sidebar--cookies'>Cookies</a>
        <CustomizedDialogs />
      </div>
    </div>
  )
}

export default Sidebar
