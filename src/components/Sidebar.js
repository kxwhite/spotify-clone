import React from 'react'
import logo from '../assets/sidebar_assets/Spotify_Logo_RGB_White.png'
import './Sidebar.css'
import { Home, Search, LibraryMusic, AddBox, Favorite } from '@mui/icons-material'
import { Link } from "react-router-dom";
import CustomizedDialogs from './common/DialogModal'
import SidebarPlaylists from './SidebarPlaylists';
import { useStateProviderValue } from '../StateProvider';

function Sidebar() {

  const [{ playlists }, dispatch] = useStateProviderValue();
  console.log("playlists =>", playlists);

  return (
    <div className='sidebar--container'>
      <Link to='/'>
        <img src={logo} alt="Spotify Logo" className='sidebar--logo'/>
      </Link>
      <div className="sidebar--links">
        <div className='sidebar--link-cont'><Home className='sidebar--icons' sx={{ fontSize: 30 }}/><Link to="/" className='sidebar--link'>Home</Link></div>
        <div className='sidebar--link-cont'><Search className='sidebar--icons' sx={{ fontSize: 30 }}/><Link to="/search" className='sidebar--link'>Search</Link></div>
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

      <div>
        {playlists?.items?.map(playlist => (
          <SidebarPlaylists title={playlist.name} key={ playlist.name }/>
        ))}
      </div>

      <div className="sidebar--cookies-country">
        <Link className='sidebar--cookies'>Cookies</Link>
        <CustomizedDialogs />
      </div>
    </div>
  )
}

export default Sidebar
