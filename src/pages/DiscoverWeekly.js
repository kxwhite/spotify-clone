import React, { useState } from 'react'
import '../styles/DiscoverWeekly.css';
import { PlayCircle, DownloadForOffline, MoreHoriz, Search, AccessTime } from "@mui/icons-material";
import MusicRow from '../components/MusicRow';
import { useStateProviderValue } from '../StateProvider';
import Banner from '../components/Banner';
import RecentlyPlayed from '../components/common/RecentlyPlayed';

function DiscoverWeekly({spotify}) {

  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show)
  }

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`,
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
    <div className="discover--body">
      <Banner spotify={spotify}/>
      <div className="discover--bottom-section">
        <div className="discover--play-nav">
          <div className="discover--play-nav-left">
            <PlayCircle onClick={playPlaylist} sx={{ fontSize: '60px', color: '#1EB954' }} className="discover--play-btn"/>
            <DownloadForOffline sx={{ fontSize: '30px', color: '#1EB954' }} className="discover--downarrow-btn"/>
            <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="discover--more-btn"/>
          </div>
          <div className="discover--play-nav-right">
            <div className="discover--search-cont">
              {show ? <input className='discover--search-input' type="text" style={{marginRight: '10px'}} placeholder="Search for discovers or songs"/> : null}
              <Search sx={{ fontSize: '20px', color: '#A4A4A4', opacity: '0.6' }} onClick={showHandler} className="discover--more-btn discover--search-icon" />
            </div>
            <div className="discover--recent-container">
              <RecentlyPlayed className="nav--menu"/>
            </div>
          </div>
        </div>
        <div className="discover--table">
          <div className='discover--table-head'>
            <div className="discover--table-first">
              <p className='discover--table-header'>#</p>
              <p className='discover--table-header'>Title</p>
            </div>
            <p className='discover--table-header'>Album</p>
            <p className='discover--table-header'>Date Added</p>
            <p className="discover--clock"><AccessTime sx={{ fontSize: '20px', color: '#767676' }}/></p>
          </div>
          <hr className='discover--hr'/>
          {discover_weekly?.tracks.items.map((d, index) => {
            return (
              <div key={index} className={`discover--table-row`}>
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

export default DiscoverWeekly
