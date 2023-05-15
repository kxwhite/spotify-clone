import React, { useState } from 'react'
import '../styles/TopTracks.css';
import { PlayCircle, DownloadForOffline, MoreHoriz, Search, AccessTime } from "@mui/icons-material";
import MusicRow from '../components/MusicRow';
import { useStateProviderValue } from '../StateProvider';
// import Banner from '../components/Banner';
import RecentlyPlayed from '../components/common/RecentlyPlayed';
import { Avatar } from '@mui/material';
import logo from "../assets/banner_assets/Spotify_logo.svg.webp";

function TopTracks({spotify}) {
   const [{ top_tracks }, dispatch] = useStateProviderValue();

   const [show, setShow] = useState(false);

   const showHandler = () => {
     setShow(!show);
   };

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1DX18jTM2l2fJY`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
     <div className="top-tracks--body">
      <div className="top-tracks--top-section">
        <img
          src={top_tracks?.images[0].url}
          alt="Album"
          className="banner--main-album"
        />
        <div className="banner--top-subsection">
          <p className="banner--caption">Top Tracks</p>
          <h1 className="banner--title">{top_tracks?.name}</h1>
          <div className="banner--info">
            <p className="banner--para">{top_tracks?.description}</p>
            <div className="banner--user-section">
              <Avatar
                alt={top_tracks?.name}
                src={logo}
                sx={{ width: 30, height: 30 }}
                className="nav--avatar"
              />
              <p className="banner--user-name"><strong>{top_tracks?.owner.display_name}</strong></p>
              <p className="banner--user-info">&nbsp;• 165,020 Likes •</p>
              <p className="banner--user-info">&nbsp;{top_tracks?.tracks.total} songs •&nbsp;</p>
              <p className="banner--duration"> 2 hr 45 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-tracks--bottom-section">
        <div className="top-tracks--play-nav">
          <div className="top-tracks--play-nav-left">
            <PlayCircle onClick={playPlaylist} sx={{ fontSize: '60px', color: '#1EB954' }} className="top-tracks--play-btn"/>
            <DownloadForOffline sx={{ fontSize: '30px', color: '#1EB954' }} className="top-tracks--downarrow-btn"/>
            <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="top-tracks--more-btn"/>
          </div>
          <div className="top-tracks--play-nav-right">
            <div className="top-tracks--search-cont">
              {show ? <input className='top-tracks--search-input' type="text" style={{marginRight: '10px'}} placeholder="Search for top-trackss or songs"/> : null}
              <Search sx={{ fontSize: '20px', color: '#A4A4A4', opacity: '0.6' }} onClick={showHandler} className="top-tracks--more-btn top-tracks--search-icon" />
            </div>
            <div className="top-tracks--recent-container">
              <RecentlyPlayed className="nav--menu"/>
            </div>
          </div>
        </div>
        <div className="top-tracks--table">
          <div className='top-tracks--table-head'>
            <div className="top-tracks--table-first">
              <p className='top-tracks--table-header'>#</p>
              <p className='top-tracks--table-header'>Title</p>
            </div>
            <p className='top-tracks--table-header'>Album</p>
            <p className='top-tracks--table-header'>Date Added</p>
            <p className="top-tracks--clock"><AccessTime sx={{ fontSize: '20px', color: '#767676' }}/></p>
          </div>
          <hr className='top-tracks--hr'/>
          {top_tracks?.tracks.items.map((d, index) => {
            return (
              <div key={index} className={`top-tracks--table-row`}>
                <MusicRow
                  i={index}
                  id={index + 1}
                  track={d.track}
                  playSong={playSong}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default TopTracks
