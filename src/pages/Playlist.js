import React from 'react'
import '../styles/Playlist.css'
import img from '../assets/footer_assets/Mac_Miller_-_Swimming.png';
import paul from '../assets/navbar_assets/paulrudd.jpeg';
import { Avatar } from '@mui/material';
import { PlayCircle, DownloadForOffline, MoreHoriz, Search, ArrowDropDown, AccessTime } from "@mui/icons-material";
import MusicRow from '../components/MusicRow';

function Playlist() {

  const data = [
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
    {img: {img}, title: 'What\'s the Use?', artist: 'Mac Miller', album: 'Swimming', date: 'Mar 28, 2023', duration: '3:03'},
  ]

  return (
    <div className="playlist--body">
      <div className="playlist--top-section">
        <img src={img} alt='Album' className='playlist--main-album'/>
        <div className="playlist--top-subsection">
          <p className='playlist--caption'>Playlist</p>
          <h1 className='playlist--title'>My Playlist #2</h1>
          <div className="playlist--user-section">
            <Avatar alt="Paul Rudd" src={paul} sx={{ width: 30, height: 30 }} className='nav--avatar'/>
            <p className='playlist--user-name'>Paul Rudd</p>
            <p className='playlist--user-info'>&nbsp;• 5 Likes •</p>
            <p className='playlist--user-info'>&nbsp;9 songs&nbsp;</p>
            <p className='playlist--user-info'>• 27 min</p>
          </div>
        </div>
      </div>
      <div className="playlist--bottom-section">
        <div className="playlist--play-nav">
          <div className="playlist--play-nav-left">
            <PlayCircle sx={{ fontSize: '60px', color: '#1EB954' }} className="playlist--play-btn"/>
            <DownloadForOffline sx={{ fontSize: '30px', color: '#1EB954' }} className="playlist--downarrow-btn"/>
            <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="playlist--more-btn"/>
          </div>
          <div className="playlist--play-nav-right">
            <Search sx={{ fontSize: '20px', color: '#A4A4A4', opacity: '0.6' }} className="playlist--more-btn"/>
            <div className="playlist--recent-container">
              <p className="playlist--recent-txt">Recently played</p>
              <ArrowDropDown sx={{ fontSize: '20px', color: '#A4A4A4', opacity: '0.6' }} className="playlist--more-btn"/>
            </div>
          </div>
        </div>
        <div className="playlist--table">
          <div className='playlist--table-head'>
            <div className="playlist--table-first">
              <p className='playlist--table-header'>#</p>
              <p className='playlist--table-header'>Title</p>
            </div>
            {/* <p className='playlist--table-header'>Album</p>
            <p className='playlist--table-header'>Date Added</p> */}
            <p><AccessTime sx={{ fontSize: '20px', color: '#767676' }} className="playlist--clock"/></p>
          </div>
          <hr className='playlist--hr'/>
          {data.map((d, index) => {
            return (
              <div key={index}  className={`playlist--table-row`}
              >
                <MusicRow
                  i={index}
                  id={index + 1}
                  img={d.img}
                  title={d.title}
                  artist={d.artist}
                  album={d.album}
                  date={d.date}
                  duration={d.duration}
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
