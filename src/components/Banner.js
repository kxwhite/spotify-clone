import React from 'react'
import { useStateProviderValue } from '../StateProvider';
import { Avatar } from "@mui/material";
import "./Banner.css";
import logo from "../assets/banner_assets/Spotify_logo.svg.webp"

function Banner({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  return (
    <div className="banner--top-section">
      <img
        src={discover_weekly?.images[0].url}
        alt="Album"
        className="banner--main-album"
      />
      <div className="banner--top-subsection">
        <p className="banner--caption">Playlist</p>
        <h1 className="banner--title">Discover Weekly</h1>
        <div className="banner--info">
          <p className="banner--para">{discover_weekly?.description}</p>
          <div className="banner--user-section">
            <Avatar
              alt={discover_weekly?.name}
              src={logo}
              sx={{ width: 30, height: 30 }}
              className="nav--avatar"
            />
            <p className="banner--user-name">Made for <strong>{discover_weekly?.tracks.items[0].track.artists[0].name}</strong></p>
            <p className="banner--user-info">&nbsp;• 1209 Likes •</p>
            <p className="banner--user-info">&nbsp;{discover_weekly?.tracks.total} songs&nbsp;</p>
            <p className="banner--user-info">• 1 hr 45 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
