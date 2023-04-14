import React, { useState } from 'react'
import './MusicRow.css'
import img from "../assets/footer_assets/Mac_Miller_-_Swimming.png";
import { DownloadForOffline, FavoriteBorderOutlined, MoreHoriz, PlayArrow } from "@mui/icons-material";


const MusicRow = ({i, id, title, artist, album, date, duration}) => {

  const [isHovering, setIsHovering] = useState(-1);
  const [hovering, setHovering] = useState(true);

  return (
    <div
        className={`musicrow--container ${isHovering === i ? "musicrow--container-hover" : ""}`}
        onMouseEnter={() => setIsHovering(i)} onMouseLeave={() => setIsHovering(-1)}
    >
      <div className="musicrow--first">
        {hovering ? <p className="musicrow--id">{id}</p>
        : <PlayArrow sx={{ color: '#A4A4A4', fontSize: 18}} className='musicrow--play-icon'/>}
        <div className="musicrow--title-container">
          <img src={img} alt="Album Cover" className="musicrow--img" />
          <div className="musicrow--info">
            <p className="musicrow--title">{title}</p>
            <div className="musicrow--artist-container">
              <DownloadForOffline sx={{ fontSize: '18px', color: '#A4A4A4' }} className="musicrow--downarrow-btn"/>
              <p className="musicrow--artist">{artist}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="musicrow--album">{album}</p>
      <p className="musicrow--date">{date}</p> */}
      <div className="musicrow--duration-container">
        <FavoriteBorderOutlined sx={{ color: '#767676', fontSize: 18}} className='musicrow--fav-icon'/>
        <p className="musicrow--duration">{duration}</p>
        <MoreHoriz sx={{ fontSize: '20px', color: '#767676' }} className="musicrow--more-icon"/>
      </div>
    </div>
  );
}

export default MusicRow
