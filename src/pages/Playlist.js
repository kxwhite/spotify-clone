import React, { useState } from 'react'
import '../styles/Playlist.css';
import { PlayCircle, DownloadForOffline, MoreHoriz, Search, AccessTime } from "@mui/icons-material";
import MusicRow from '../components/MusicRow';
import { useStateProviderValue } from '../StateProvider';
import Banner from '../components/Banner';
import RecentlyPlayed from '../components/common/RecentlyPlayed';

function Playlist({spotify}) {

  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show)
  }

  // const data = [
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  //   {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  // ]

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
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
    <div className="playlist--body">
      <Banner spotify={spotify}/>
      <div className="playlist--bottom-section">
        <div className="playlist--play-nav">
          <div className="playlist--play-nav-left">
            <PlayCircle onClick={playPlaylist} sx={{ fontSize: '60px', color: '#1EB954' }} className="playlist--play-btn"/>
            <DownloadForOffline sx={{ fontSize: '30px', color: '#1EB954' }} className="playlist--downarrow-btn"/>
            <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="playlist--more-btn"/>
          </div>
          <div className="playlist--play-nav-right">
            <div className="playlist--search-cont">
              {show ? <input className='playlist--search-input' type="text" style={{marginRight: '10px'}} placeholder="Search for playlists or songs"/> : null}
              <Search sx={{ fontSize: '20px', color: '#A4A4A4', opacity: '0.6' }} onClick={showHandler} className="playlist--more-btn playlist--search-icon" />
            </div>
            <div className="playlist--recent-container">
              <RecentlyPlayed className="nav--menu"/>
            </div>
          </div>
        </div>
        <div className="playlist--table">
          <div className='playlist--table-head'>
            <div className="playlist--table-first">
              <p className='playlist--table-header'>#</p>
              <p className='playlist--table-header'>Title</p>
            </div>
            <p className='playlist--table-header'>Album</p>
            <p className='playlist--table-header'>Date Added</p>
            <p className="playlist--clock"><AccessTime sx={{ fontSize: '20px', color: '#767676' }}/></p>
          </div>
          <hr className='playlist--hr'/>
          {discover_weekly?.tracks.items.map((d, index) => {
            return (
              <div key={index} className={`playlist--table-row`}>
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
  );
}

export default Playlist
