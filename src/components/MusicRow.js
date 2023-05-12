import React, { useState } from 'react'
import './MusicRow.css'
import { DownloadForOffline, FavoriteBorderOutlined, MoreHoriz, PlayArrow } from "@mui/icons-material";


const MusicRow = ({i, id, title, artist, album, date, duration, track, playSong}) => {

  const [isHovering, setIsHovering] = useState(-1);
  const [hovering] = useState(true);

  const millisToMinsAndSecs = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const dateAdded = (date) => {
    let releaseDate = new Date(date);
    let launchFromToday = releaseDate.getDate();
    return launchFromToday + " days ago";
  }

  return (
    <div
        className={`musicrow--container ${isHovering === i ? "musicrow--container-hover" : ""}`}
        onMouseEnter={() => setIsHovering(i)} onMouseLeave={() => setIsHovering(-1)}
        onClick={() => playSong(track.id)}
    >
      <div className="musicrow--first">
        {hovering ? <p className="musicrow--id">{id}</p>
        : <PlayArrow sx={{ color: '#A4A4A4', fontSize: 18}} className='musicrow--play-icon'/>}
        <div className="musicrow--title-container">
          <img src={track.album.images[0].url} alt={track.album.name} className="musicrow--img" />
          <div className="musicrow--info">
            <p className="musicrow--title">{track.name}</p>
            <div className="musicrow--artist-container">
              <DownloadForOffline sx={{ fontSize: '18px', color: '#A4A4A4' }} className="musicrow--downarrow-btn"/>
              <p className="musicrow--artist">
                {track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="musicrow--album">{track.album.name}</p>
      <p className="musicrow--date">{dateAdded(track.album.release_date)}</p>
      <div className="musicrow--duration-container">
        <FavoriteBorderOutlined sx={{ color: '#767676', fontSize: 18}} className='musicrow--fav-icon'/>
        <p className="musicrow--duration">{millisToMinsAndSecs(track.duration_ms)}</p>
        <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="musicrow--more-icon"/>
      </div>
    </div>
  );
}

export default MusicRow
